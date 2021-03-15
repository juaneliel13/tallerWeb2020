/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
/**
 * @record
 */
export function UploaderOptions() { }
if (false) {
    /** @type {?} */
    UploaderOptions.prototype.concurrency;
    /** @type {?|undefined} */
    UploaderOptions.prototype.allowedContentTypes;
    /** @type {?|undefined} */
    UploaderOptions.prototype.maxUploads;
}
/**
 * @record
 */
export function BlobFile() { }
if (false) {
    /** @type {?} */
    BlobFile.prototype.name;
}
/** @enum {number} */
const UploadStatus = {
    Queue: 0,
    Uploading: 1,
    Done: 2,
    Cancelled: 3,
};
export { UploadStatus };
UploadStatus[UploadStatus.Queue] = 'Queue';
UploadStatus[UploadStatus.Uploading] = 'Uploading';
UploadStatus[UploadStatus.Done] = 'Done';
UploadStatus[UploadStatus.Cancelled] = 'Cancelled';
/**
 * @record
 */
export function UploadProgress() { }
if (false) {
    /** @type {?} */
    UploadProgress.prototype.status;
    /** @type {?|undefined} */
    UploadProgress.prototype.data;
}
/**
 * @record
 */
export function UploadFile() { }
if (false) {
    /** @type {?} */
    UploadFile.prototype.id;
    /** @type {?} */
    UploadFile.prototype.fileIndex;
    /** @type {?} */
    UploadFile.prototype.lastModifiedDate;
    /** @type {?} */
    UploadFile.prototype.name;
    /** @type {?} */
    UploadFile.prototype.size;
    /** @type {?} */
    UploadFile.prototype.type;
    /** @type {?} */
    UploadFile.prototype.form;
    /** @type {?} */
    UploadFile.prototype.progress;
    /** @type {?|undefined} */
    UploadFile.prototype.response;
    /** @type {?|undefined} */
    UploadFile.prototype.responseStatus;
    /** @type {?|undefined} */
    UploadFile.prototype.sub;
    /** @type {?|undefined} */
    UploadFile.prototype.nativeFile;
    /** @type {?|undefined} */
    UploadFile.prototype.responseHeaders;
}
/**
 * @record
 */
export function UploadOutput() { }
if (false) {
    /** @type {?} */
    UploadOutput.prototype.type;
    /** @type {?|undefined} */
    UploadOutput.prototype.file;
    /** @type {?|undefined} */
    UploadOutput.prototype.nativeFile;
}
/**
 * @record
 */
export function UploadInput() { }
if (false) {
    /** @type {?} */
    UploadInput.prototype.type;
    /** @type {?|undefined} */
    UploadInput.prototype.url;
    /** @type {?|undefined} */
    UploadInput.prototype.method;
    /** @type {?|undefined} */
    UploadInput.prototype.id;
    /** @type {?|undefined} */
    UploadInput.prototype.fieldName;
    /** @type {?|undefined} */
    UploadInput.prototype.fileIndex;
    /** @type {?|undefined} */
    UploadInput.prototype.file;
    /** @type {?|undefined} */
    UploadInput.prototype.data;
    /** @type {?|undefined} */
    UploadInput.prototype.headers;
    /** @type {?|undefined} */
    UploadInput.prototype.withCredentials;
}
/**
 * @param {?} bytes
 * @return {?}
 */
export function humanizeBytes(bytes) {
    if (bytes === 0) {
        return '0 Byte';
    }
    /** @type {?} */
    const k = 1024;
    /** @type {?} */
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    /** @type {?} */
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
export class MDBUploaderService {
    /**
     * @param {?=} concurrency
     * @param {?=} contentTypes
     * @param {?=} maxUploads
     */
    constructor(concurrency = Number.POSITIVE_INFINITY, contentTypes = ['*'], maxUploads = Number.POSITIVE_INFINITY) {
        this.queue = [];
        this.serviceEvents = new EventEmitter();
        this.uploadScheduler = new Subject();
        this.subs = [];
        this.contentTypes = contentTypes;
        this.maxUploads = maxUploads;
        this.uploadScheduler
            .pipe(mergeMap((/**
         * @param {?} upload
         * @return {?}
         */
        upload => this.startUpload(upload)), concurrency))
            .subscribe((/**
         * @param {?} uploadOutput
         * @return {?}
         */
        uploadOutput => this.serviceEvents.emit(uploadOutput)));
    }
    /**
     * @param {?} incomingFiles
     * @return {?}
     */
    handleFiles(incomingFiles) {
        /** @type {?} */
        const allowedIncomingFiles = [].reduce.call(incomingFiles, (/**
         * @param {?} acc
         * @param {?} checkFile
         * @param {?} i
         * @return {?}
         */
        (acc, checkFile, i) => {
            /** @type {?} */
            const futureQueueLength = acc.length + this.queue.length + 1;
            if (this.isContentTypeAllowed(checkFile.type) && futureQueueLength <= this.maxUploads) {
                acc = acc.concat(checkFile);
            }
            else {
                /** @type {?} */
                const rejectedFile = this.makeUploadFile(checkFile, i);
                this.serviceEvents.emit({ type: 'rejected', file: rejectedFile });
            }
            return acc;
        }), []);
        this.queue.push(...[].map.call(allowedIncomingFiles, (/**
         * @param {?} file
         * @param {?} i
         * @return {?}
         */
        (file, i) => {
            /** @type {?} */
            const uploadFile = this.makeUploadFile(file, i);
            this.serviceEvents.emit({ type: 'addedToQueue', file: uploadFile });
            return uploadFile;
        })));
        this.serviceEvents.emit({ type: 'allAddedToQueue' });
    }
    /**
     * @param {?} input
     * @return {?}
     */
    initInputEvents(input) {
        return input.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            switch (event.type) {
                case 'uploadFile':
                    /** @type {?} */
                    const uploadFileIndex = this.queue.findIndex((/**
                     * @param {?} file
                     * @return {?}
                     */
                    file => file === event.file));
                    if (uploadFileIndex !== -1 && event.file) {
                        this.uploadScheduler.next({ file: this.queue[uploadFileIndex], event: event });
                    }
                    break;
                case 'uploadAll':
                    /** @type {?} */
                    const files = this.queue.filter((/**
                     * @param {?} file
                     * @return {?}
                     */
                    file => file.progress.status === UploadStatus.Queue));
                    files.forEach((/**
                     * @param {?} file
                     * @return {?}
                     */
                    file => this.uploadScheduler.next({ file: file, event: event })));
                    break;
                case 'cancel':
                    /** @type {?} */
                    const id = event.id || null;
                    if (!id) {
                        return;
                    }
                    /** @type {?} */
                    const index = this.subs.findIndex((/**
                     * @param {?} sub
                     * @return {?}
                     */
                    sub => sub.id === id));
                    if (index !== -1 && this.subs[index].sub) {
                        this.subs[index].sub.unsubscribe();
                        /** @type {?} */
                        const fileIndex = this.queue.findIndex((/**
                         * @param {?} file
                         * @return {?}
                         */
                        file => file.id === id));
                        if (fileIndex !== -1) {
                            this.queue[fileIndex].progress.status = UploadStatus.Cancelled;
                            this.serviceEvents.emit({ type: 'cancelled', file: this.queue[fileIndex] });
                        }
                    }
                    break;
                case 'cancelAll':
                    this.subs.forEach((/**
                     * @param {?} sub
                     * @return {?}
                     */
                    sub => {
                        if (sub.sub) {
                            sub.sub.unsubscribe();
                        }
                        /** @type {?} */
                        const file = this.queue.find((/**
                         * @param {?} uploadFile
                         * @return {?}
                         */
                        uploadFile => uploadFile.id === sub.id));
                        if (file) {
                            file.progress.status = UploadStatus.Cancelled;
                            this.serviceEvents.emit({ type: 'cancelled', file: file });
                        }
                    }));
                    break;
                case 'remove':
                    if (!event.id) {
                        return;
                    }
                    /** @type {?} */
                    const i = this.queue.findIndex((/**
                     * @param {?} file
                     * @return {?}
                     */
                    file => file.id === event.id));
                    if (i !== -1) {
                        /** @type {?} */
                        const file = this.queue[i];
                        this.queue.splice(i, 1);
                        this.serviceEvents.emit({ type: 'removed', file: file });
                    }
                    break;
                case 'removeAll':
                    if (this.queue.length) {
                        this.queue = [];
                        this.serviceEvents.emit({ type: 'removedAll' });
                    }
                    break;
            }
        }));
    }
    /**
     * @param {?} upload
     * @return {?}
     */
    startUpload(upload) {
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            /** @type {?} */
            const sub = this.uploadFile(upload.file, upload.event).subscribe((/**
             * @param {?} output
             * @return {?}
             */
            output => {
                observer.next(output);
            }), (/**
             * @param {?} err
             * @return {?}
             */
            err => {
                observer.error(err);
                observer.complete();
            }), (/**
             * @return {?}
             */
            () => {
                observer.complete();
            }));
            this.subs.push({ id: upload.file.id, sub: sub });
        }));
    }
    /**
     * @param {?} file
     * @param {?} event
     * @return {?}
     */
    uploadFile(file, event) {
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            /** @type {?} */
            const url = event.url || '';
            /** @type {?} */
            const method = event.method || 'POST';
            /** @type {?} */
            const data = event.data || {};
            /** @type {?} */
            const headers = event.headers || {};
            /** @type {?} */
            const xhr = new XMLHttpRequest();
            /** @type {?} */
            const time = new Date().getTime();
            /** @type {?} */
            let progressStartTime = (file.progress.data && file.progress.data.startTime) || time;
            /** @type {?} */
            let speed = 0;
            /** @type {?} */
            let eta = null;
            xhr.upload.addEventListener('progress', (/**
             * @param {?} e
             * @return {?}
             */
            (e) => {
                if (e.lengthComputable) {
                    /** @type {?} */
                    const percentage = Math.round((e.loaded * 100) / e.total);
                    /** @type {?} */
                    const diff = new Date().getTime() - time;
                    speed = Math.round((e.loaded / diff) * 1000);
                    progressStartTime =
                        (file.progress.data && file.progress.data.startTime) || new Date().getTime();
                    eta = Math.ceil((e.total - e.loaded) / speed);
                    file.progress = {
                        status: UploadStatus.Uploading,
                        data: {
                            percentage: percentage,
                            speed: speed,
                            speedHuman: `${humanizeBytes(speed)}/s`,
                            startTime: progressStartTime,
                            endTime: null,
                            eta: eta,
                            etaHuman: this.secondsToHuman(eta),
                        },
                    };
                    observer.next({ type: 'uploading', file: file });
                }
            }), false);
            xhr.upload.addEventListener('error', (/**
             * @param {?} e
             * @return {?}
             */
            (e) => {
                observer.error(e);
                observer.complete();
            }));
            xhr.onreadystatechange = (/**
             * @return {?}
             */
            () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    /** @type {?} */
                    const speedAverage = Math.round((file.size / (new Date().getTime() - progressStartTime)) * 1000);
                    file.progress = {
                        status: UploadStatus.Done,
                        data: {
                            percentage: 100,
                            speed: speedAverage,
                            speedHuman: `${humanizeBytes(speedAverage)}/s`,
                            startTime: progressStartTime,
                            endTime: new Date().getTime(),
                            eta: eta,
                            etaHuman: this.secondsToHuman(eta || 0),
                        },
                    };
                    file.responseStatus = xhr.status;
                    try {
                        file.response = JSON.parse(xhr.response);
                    }
                    catch (e) {
                        file.response = xhr.response;
                    }
                    file.responseHeaders = this.parseResponseHeaders(xhr.getAllResponseHeaders());
                    observer.next({ type: 'done', file: file });
                    observer.complete();
                }
            });
            xhr.open(method, url, true);
            xhr.withCredentials = event.withCredentials ? true : false;
            try {
                /** @type {?} */
                const uploadFile = (/** @type {?} */ (file.nativeFile));
                /** @type {?} */
                const uploadIndex = this.queue.findIndex((/**
                 * @param {?} outFile
                 * @return {?}
                 */
                outFile => outFile.nativeFile === uploadFile));
                if (this.queue[uploadIndex].progress.status === UploadStatus.Cancelled) {
                    observer.complete();
                }
                Object.keys(data).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => file.form.append(key, data[key])));
                Object.keys(headers).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => xhr.setRequestHeader(key, headers[key])));
                file.form.append(event.fieldName || 'file', uploadFile, uploadFile.name);
                this.serviceEvents.emit({ type: 'start', file: file });
                xhr.send(file.form);
            }
            catch (e) {
                observer.complete();
            }
            return (/**
             * @return {?}
             */
            () => {
                xhr.abort();
            });
        }));
    }
    /**
     * @param {?} sec
     * @return {?}
     */
    secondsToHuman(sec) {
        return new Date(sec * 1000).toISOString().substr(11, 8);
    }
    /**
     * @return {?}
     */
    generateId() {
        return Math.random()
            .toString(36)
            .substring(7);
    }
    /**
     * @param {?} contentTypes
     * @return {?}
     */
    setContentTypes(contentTypes) {
        if (typeof contentTypes !== 'undefined' && contentTypes instanceof Array) {
            if (contentTypes.find((/**
             * @param {?} type
             * @return {?}
             */
            (type) => type === '*')) !== undefined) {
                this.contentTypes = ['*'];
            }
            else {
                this.contentTypes = contentTypes;
            }
            return;
        }
        this.contentTypes = ['*'];
    }
    /**
     * @return {?}
     */
    allContentTypesAllowed() {
        return this.contentTypes.find((/**
         * @param {?} type
         * @return {?}
         */
        (type) => type === '*')) !== undefined;
    }
    /**
     * @param {?} mimetype
     * @return {?}
     */
    isContentTypeAllowed(mimetype) {
        if (this.allContentTypesAllowed()) {
            return true;
        }
        return this.contentTypes.find((/**
         * @param {?} type
         * @return {?}
         */
        (type) => type === mimetype)) !== undefined;
    }
    /**
     * @param {?} file
     * @param {?} index
     * @return {?}
     */
    makeUploadFile(file, index) {
        return {
            fileIndex: index,
            id: this.generateId(),
            name: file.name,
            size: file.size,
            type: file.type,
            form: new FormData(),
            progress: {
                status: UploadStatus.Queue,
                data: {
                    percentage: 0,
                    speed: 0,
                    speedHuman: `${humanizeBytes(0)}/s`,
                    startTime: null,
                    endTime: null,
                    eta: null,
                    etaHuman: null,
                },
            },
            lastModifiedDate: file.lastModified,
            sub: undefined,
            nativeFile: file,
        };
    }
    /**
     * @private
     * @param {?} httpHeaders
     * @return {?}
     */
    parseResponseHeaders(httpHeaders) {
        if (!httpHeaders) {
            return;
        }
        return httpHeaders
            .split('\n')
            .map((/**
         * @param {?} x
         * @return {?}
         */
        (x) => x.split(/: */, 2)))
            .filter((/**
         * @param {?} x
         * @return {?}
         */
        (x) => x[0]))
            .reduce((/**
         * @param {?} ac
         * @param {?} x
         * @return {?}
         */
        (ac, x) => {
            ac[x[0]] = x[1];
            return ac;
        }), {});
    }
}
if (false) {
    /** @type {?} */
    MDBUploaderService.prototype.queue;
    /** @type {?} */
    MDBUploaderService.prototype.serviceEvents;
    /** @type {?} */
    MDBUploaderService.prototype.uploadScheduler;
    /** @type {?} */
    MDBUploaderService.prototype.subs;
    /** @type {?} */
    MDBUploaderService.prototype.contentTypes;
    /** @type {?} */
    MDBUploaderService.prototype.maxUploads;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXVwbG9hZGVyLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9maWxlLWlucHV0L2NsYXNzZXMvbWRiLXVwbG9hZGVyLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFMUMscUNBSUM7OztJQUhDLHNDQUFvQjs7SUFDcEIsOENBQStCOztJQUMvQixxQ0FBb0I7Ozs7O0FBR3RCLDhCQUVDOzs7SUFEQyx3QkFBYTs7OztJQUliLFFBQUs7SUFDTCxZQUFTO0lBQ1QsT0FBSTtJQUNKLFlBQVM7Ozs7Ozs7Ozs7QUFHWCxvQ0FXQzs7O0lBVkMsZ0NBQXFCOztJQUNyQiw4QkFRRTs7Ozs7QUFHSixnQ0FjQzs7O0lBYkMsd0JBQVc7O0lBQ1gsK0JBQWtCOztJQUNsQixzQ0FBeUI7O0lBQ3pCLDBCQUFhOztJQUNiLDBCQUFhOztJQUNiLDBCQUFhOztJQUNiLDBCQUFlOztJQUNmLDhCQUF5Qjs7SUFDekIsOEJBQWU7O0lBQ2Ysb0NBQXdCOztJQUN4Qix5QkFBeUI7O0lBQ3pCLGdDQUFrQjs7SUFDbEIscUNBQTRDOzs7OztBQUc5QyxrQ0FnQkM7OztJQWZDLDRCQVllOztJQUNmLDRCQUFrQjs7SUFDbEIsa0NBQWtCOzs7OztBQUdwQixpQ0FXQzs7O0lBVkMsMkJBQW1GOztJQUNuRiwwQkFBYTs7SUFDYiw2QkFBZ0I7O0lBQ2hCLHlCQUFZOztJQUNaLGdDQUFtQjs7SUFDbkIsZ0NBQW1COztJQUNuQiwyQkFBa0I7O0lBQ2xCLDJCQUF3Qzs7SUFDeEMsOEJBQW9DOztJQUNwQyxzQ0FBMEI7Ozs7OztBQUc1QixNQUFNLFVB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b0I7O0lBQ3BCLDJDQUEwQzs7SUFDMUMsNkNBQW1FOztJQUNuRSxrQ0FBMEM7O0lBQzFDLDBDQUF1Qjs7SUFDdkIsd0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVwbG9hZGVyT3B0aW9ucyB7XG4gIGNvbmN1cnJlbmN5OiBudW1iZXI7XG4gIGFsbG93ZWRDb250ZW50VHlwZXM/OiBzdHJpbmdbXTtcbiAgbWF4VXBsb2Fkcz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCbG9iRmlsZSBleHRlbmRzIEJsb2Ige1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIFVwbG9hZFN0YXR1cyB7XG4gIFF1ZXVlLFxuICBVcGxvYWRpbmcsXG4gIERvbmUsXG4gIENhbmNlbGxlZCxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGxvYWRQcm9ncmVzcyB7XG4gIHN0YXR1czogVXBsb2FkU3RhdHVzO1xuICBkYXRhPzoge1xuICAgIHBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgICBzcGVlZDogbnVtYmVyO1xuICAgIHNwZWVkSHVtYW46IHN0cmluZztcbiAgICBzdGFydFRpbWU6IG51bWJlciB8IG51bGw7XG4gICAgZW5kVGltZTogbnVtYmVyIHwgbnVsbDtcbiAgICBldGE6IG51bWJlciB8IG51bGw7XG4gICAgZXRhSHVtYW46IHN0cmluZyB8IG51bGw7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBsb2FkRmlsZSB7XG4gIGlkOiBzdHJpbmc7XG4gIGZpbGVJbmRleDogbnVtYmVyO1xuICBsYXN0TW9kaWZpZWREYXRlOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgc2l6ZTogbnVtYmVyO1xuICB0eXBlOiBzdHJpbmc7XG4gIGZvcm06IEZvcm1EYXRhO1xuICBwcm9ncmVzczogVXBsb2FkUHJvZ3Jlc3M7XG4gIHJlc3BvbnNlPzogYW55O1xuICByZXNwb25zZVN0YXR1cz86IG51bWJlcjtcbiAgc3ViPzogU3Vic2NyaXB0aW9uIHwgYW55O1xuICBuYXRpdmVGaWxlPzogRmlsZTtcbiAgcmVzcG9uc2VIZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGxvYWRPdXRwdXQge1xuICB0eXBlOlxuICAgIHwgJ2FkZGVkVG9RdWV1ZSdcbiAgICB8ICdhbGxBZGRlZFRvUXVldWUnXG4gICAgfCAndXBsb2FkaW5nJ1xuICAgIHwgJ2RvbmUnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2FuY2VsbGVkJ1xuICAgIHwgJ2RyYWdPdmVyJ1xuICAgIHwgJ2RyYWdPdXQnXG4gICAgfCAnZHJvcCdcbiAgICB8ICdyZW1vdmVkJ1xuICAgIHwgJ3JlbW92ZWRBbGwnXG4gICAgfCAncmVqZWN0ZWQnO1xuICBmaWxlPzogVXBsb2FkRmlsZTtcbiAgbmF0aXZlRmlsZT86IEZpbGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBsb2FkSW5wdXQge1xuICB0eXBlOiAndXBsb2FkQWxsJyB8ICd1cGxvYWRGaWxlJyB8ICdjYW5jZWwnIHwgJ2NhbmNlbEFsbCcgfCAncmVtb3ZlJyB8ICdyZW1vdmVBbGwnO1xuICB1cmw/OiBzdHJpbmc7XG4gIG1ldGhvZD86IHN0cmluZztcbiAgaWQ/OiBzdHJpbmc7XG4gIGZpZWxkTmFtZT86IHN0cmluZztcbiAgZmlsZUluZGV4PzogbnVtYmVyO1xuICBmaWxlPzogVXBsb2FkRmlsZTtcbiAgZGF0YT86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgQmxvYiB9O1xuICBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh1bWFuaXplQnl0ZXMoYnl0ZXM6IG51bWJlcik6IHN0cmluZyB7XG4gIGlmIChieXRlcyA9PT0gMCkge1xuICAgIHJldHVybiAnMCBCeXRlJztcbiAgfVxuXG4gIGNvbnN0IGsgPSAxMDI0O1xuICBjb25zdCBzaXplczogc3RyaW5nW10gPSBbJ0J5dGVzJywgJ0tCJywgJ01CJywgJ0dCJywgJ1RCJywgJ1BCJ107XG4gIGNvbnN0IGk6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coaykpO1xuXG4gIHJldHVybiBwYXJzZUZsb2F0KChieXRlcyAvIE1hdGgucG93KGssIGkpKS50b0ZpeGVkKDIpKSArICcgJyArIHNpemVzW2ldO1xufVxuXG5leHBvcnQgY2xhc3MgTURCVXBsb2FkZXJTZXJ2aWNlIHtcbiAgcXVldWU6IFVwbG9hZEZpbGVbXTtcbiAgc2VydmljZUV2ZW50czogRXZlbnRFbWl0dGVyPFVwbG9hZE91dHB1dD47XG4gIHVwbG9hZFNjaGVkdWxlcjogU3ViamVjdDx7IGZpbGU6IFVwbG9hZEZpbGU7IGV2ZW50OiBVcGxvYWRJbnB1dCB9PjtcbiAgc3ViczogeyBpZDogc3RyaW5nOyBzdWI6IFN1YnNjcmlwdGlvbiB9W107XG4gIGNvbnRlbnRUeXBlczogc3RyaW5nW107XG4gIG1heFVwbG9hZHM6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb25jdXJyZW5jeTogbnVtYmVyID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuICAgIGNvbnRlbnRUeXBlczogc3RyaW5nW10gPSBbJyonXSxcbiAgICBtYXhVcGxvYWRzOiBudW1iZXIgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFlcbiAgKSB7XG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgIHRoaXMuc2VydmljZUV2ZW50cyA9IG5ldyBFdmVudEVtaXR0ZXI8VXBsb2FkT3V0cHV0PigpO1xuICAgIHRoaXMudXBsb2FkU2NoZWR1bGVyID0gbmV3IFN1YmplY3QoKTtcbiAgICB0aGlzLnN1YnMgPSBbXTtcbiAgICB0aGlzLmNvbnRlbnRUeXBlcyA9IGNvbnRlbnRUeXBlcztcbiAgICB0aGlzLm1heFVwbG9hZHMgPSBtYXhVcGxvYWRzO1xuXG4gICAgdGhpcy51cGxvYWRTY2hlZHVsZXJcbiAgICAgIC5waXBlKG1lcmdlTWFwKHVwbG9hZCA9PiB0aGlzLnN0YXJ0VXBsb2FkKHVwbG9hZCksIGNvbmN1cnJlbmN5KSlcbiAgICAgIC5zdWJzY3JpYmUodXBsb2FkT3V0cHV0ID0+IHRoaXMuc2VydmljZUV2ZW50cy5lbWl0KHVwbG9hZE91dHB1dCkpO1xuICB9XG5cbiAgaGFuZGxlRmlsZXMoaW5jb21pbmdGaWxlczogRmlsZUxpc3QpOiB2b2lkIHtcbiAgICBjb25zdCBhbGxvd2VkSW5jb21pbmdGaWxlczogRmlsZVtdID0gW10ucmVkdWNlLmNhbGwoXG4gICAgICBpbmNvbWluZ0ZpbGVzLFxuICAgICAgKGFjYzogRmlsZVtdLCBjaGVja0ZpbGU6IEZpbGUsIGk6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBmdXR1cmVRdWV1ZUxlbmd0aCA9IGFjYy5sZW5ndGggKyB0aGlzLnF1ZXVlLmxlbmd0aCArIDE7XG4gICAgICAgIGlmICh0aGlzLmlzQ29udGVudFR5cGVBbGxvd2VkKGNoZWNrRmlsZS50eXBlKSAmJiBmdXR1cmVRdWV1ZUxlbmd0aCA8PSB0aGlzLm1heFVwbG9hZHMpIHtcbiAgICAgICAgICBhY2MgPSBhY2MuY29uY2F0KGNoZWNrRmlsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcmVqZWN0ZWRGaWxlOiBVcGxvYWRGaWxlID0gdGhpcy5tYWtlVXBsb2FkRmlsZShjaGVja0ZpbGUsIGkpO1xuICAgICAgICAgIHRoaXMuc2VydmljZUV2ZW50cy5lbWl0KHsgdHlwZTogJ3JlamVjdGVkJywgZmlsZTogcmVqZWN0ZWRGaWxlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sXG4gICAgICBbXVxuICAgICk7XG5cbiAgICB0aGlzLnF1ZXVlLnB1c2goXG4gICAgICAuLi5bXS5tYXAuY2FsbChhbGxvd2VkSW5jb21pbmdGaWxlcywgKGZpbGU6IEZpbGUsIGk6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCB1cGxvYWRGaWxlOiBVcGxvYWRGaWxlID0gdGhpcy5tYWtlVXBsb2FkRmlsZShmaWxlLCBpKTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlRXZlbnRzLmVtaXQoeyB0eXBlOiAnYWRkZWRUb1F1ZXVlJywgZmlsZTogdXBsb2FkRmlsZSB9KTtcbiAgICAgICAgcmV0dXJuIHVwbG9hZEZpbGU7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnNlcnZpY2VFdmVudHMuZW1pdCh7IHR5cGU6ICdhbGxBZGRlZFRvUXVldWUnIH0pO1xuICB9XG5cbiAgaW5pdElucHV0RXZlbnRzKGlucHV0OiBFdmVudEVtaXR0ZXI8VXBsb2FkSW5wdXQ+KTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gaW5wdXQuc3Vic2NyaWJlKChldmVudDogVXBsb2FkSW5wdXQpID0+IHtcbiAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICBjYXNlICd1cGxvYWRGaWxlJzpcbiAgICAgICAgICBjb25zdCB1cGxvYWRGaWxlSW5kZXggPSB0aGlzLnF1ZXVlLmZpbmRJbmRleChmaWxlID0+IGZpbGUgPT09IGV2ZW50LmZpbGUpO1xuICAgICAgICAgIGlmICh1cGxvYWRGaWxlSW5kZXggIT09IC0xICYmIGV2ZW50LmZpbGUpIHtcbiAgICAgICAgICAgIHRoaXMudXBsb2FkU2NoZWR1bGVyLm5leHQoeyBmaWxlOiB0aGlzLnF1ZXVlW3VwbG9hZEZpbGVJbmRleF0sIGV2ZW50OiBldmVudCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3VwbG9hZEFsbCc6XG4gICAgICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLnF1ZXVlLmZpbHRlcihmaWxlID0+IGZpbGUucHJvZ3Jlc3Muc3RhdHVzID09PSBVcGxvYWRTdGF0dXMuUXVldWUpO1xuICAgICAgICAgIGZpbGVzLmZvckVhY2goZmlsZSA9PiB0aGlzLnVwbG9hZFNjaGVkdWxlci5uZXh0KHsgZmlsZTogZmlsZSwgZXZlbnQ6IGV2ZW50IH0pKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2FuY2VsJzpcbiAgICAgICAgICBjb25zdCBpZCA9IGV2ZW50LmlkIHx8IG51bGw7XG4gICAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdWJzLmZpbmRJbmRleChzdWIgPT4gc3ViLmlkID09PSBpZCk7XG4gICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSAmJiB0aGlzLnN1YnNbaW5kZXhdLnN1Yikge1xuICAgICAgICAgICAgdGhpcy5zdWJzW2luZGV4XS5zdWIudW5zdWJzY3JpYmUoKTtcblxuICAgICAgICAgICAgY29uc3QgZmlsZUluZGV4ID0gdGhpcy5xdWV1ZS5maW5kSW5kZXgoZmlsZSA9PiBmaWxlLmlkID09PSBpZCk7XG4gICAgICAgICAgICBpZiAoZmlsZUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICB0aGlzLnF1ZXVlW2ZpbGVJbmRleF0ucHJvZ3Jlc3Muc3RhdHVzID0gVXBsb2FkU3RhdHVzLkNhbmNlbGxlZDtcbiAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlRXZlbnRzLmVtaXQoeyB0eXBlOiAnY2FuY2VsbGVkJywgZmlsZTogdGhpcy5xdWV1ZVtmaWxlSW5kZXhdIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2FuY2VsQWxsJzpcbiAgICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4ge1xuICAgICAgICAgICAgaWYgKHN1Yi5zdWIpIHtcbiAgICAgICAgICAgICAgc3ViLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBmaWxlID0gdGhpcy5xdWV1ZS5maW5kKHVwbG9hZEZpbGUgPT4gdXBsb2FkRmlsZS5pZCA9PT0gc3ViLmlkKTtcbiAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgIGZpbGUucHJvZ3Jlc3Muc3RhdHVzID0gVXBsb2FkU3RhdHVzLkNhbmNlbGxlZDtcbiAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlRXZlbnRzLmVtaXQoeyB0eXBlOiAnY2FuY2VsbGVkJywgZmlsZTogZmlsZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVtb3ZlJzpcbiAgICAgICAgICBpZiAoIWV2ZW50LmlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgaSA9IHRoaXMucXVldWUuZmluZEluZGV4KGZpbGUgPT4gZmlsZS5pZCA9PT0gZXZlbnQuaWQpO1xuICAgICAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgZmlsZSA9IHRoaXMucXVldWVbaV07XG4gICAgICAgICAgICB0aGlzLnF1ZXVlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZUV2ZW50cy5lbWl0KHsgdHlwZTogJ3JlbW92ZWQnLCBmaWxlOiBmaWxlIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVtb3ZlQWxsJzpcbiAgICAgICAgICBpZiAodGhpcy5xdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZUV2ZW50cy5lbWl0KHsgdHlwZTogJ3JlbW92ZWRBbGwnIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXJ0VXBsb2FkKHVwbG9hZDogeyBmaWxlOiBVcGxvYWRGaWxlOyBldmVudDogVXBsb2FkSW5wdXQgfSk6IE9ic2VydmFibGU8VXBsb2FkT3V0cHV0PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+IHtcbiAgICAgIGNvbnN0IHN1YiA9IHRoaXMudXBsb2FkRmlsZSh1cGxvYWQuZmlsZSwgdXBsb2FkLmV2ZW50KS5zdWJzY3JpYmUoXG4gICAgICAgIG91dHB1dCA9PiB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChvdXRwdXQpO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHRoaXMuc3Vicy5wdXNoKHsgaWQ6IHVwbG9hZC5maWxlLmlkLCBzdWI6IHN1YiB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwbG9hZEZpbGUoZmlsZTogVXBsb2FkRmlsZSwgZXZlbnQ6IFVwbG9hZElucHV0KTogT2JzZXJ2YWJsZTxVcGxvYWRPdXRwdXQ+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgY29uc3QgdXJsID0gZXZlbnQudXJsIHx8ICcnO1xuICAgICAgY29uc3QgbWV0aG9kID0gZXZlbnQubWV0aG9kIHx8ICdQT1NUJztcbiAgICAgIGNvbnN0IGRhdGEgPSBldmVudC5kYXRhIHx8IHt9O1xuICAgICAgY29uc3QgaGVhZGVycyA9IGV2ZW50LmhlYWRlcnMgfHwge307XG5cbiAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgY29uc3QgdGltZTogbnVtYmVyID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICBsZXQgcHJvZ3Jlc3NTdGFydFRpbWU6IG51bWJlciA9IChmaWxlLnByb2dyZXNzLmRhdGEgJiYgZmlsZS5wcm9ncmVzcy5kYXRhLnN0YXJ0VGltZSkgfHwgdGltZTtcbiAgICAgIGxldCBzcGVlZCA9IDA7XG4gICAgICBsZXQgZXRhOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAncHJvZ3Jlc3MnLFxuICAgICAgICAoZTogUHJvZ3Jlc3NFdmVudCkgPT4ge1xuICAgICAgICAgIGlmIChlLmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBNYXRoLnJvdW5kKChlLmxvYWRlZCAqIDEwMCkgLyBlLnRvdGFsKTtcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRpbWU7XG4gICAgICAgICAgICBzcGVlZCA9IE1hdGgucm91bmQoKGUubG9hZGVkIC8gZGlmZikgKiAxMDAwKTtcbiAgICAgICAgICAgIHByb2dyZXNzU3RhcnRUaW1lID1cbiAgICAgICAgICAgICAgKGZpbGUucHJvZ3Jlc3MuZGF0YSAmJiBmaWxlLnByb2dyZXNzLmRhdGEuc3RhcnRUaW1lKSB8fCBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGV0YSA9IE1hdGguY2VpbCgoZS50b3RhbCAtIGUubG9hZGVkKSAvIHNwZWVkKTtcblxuICAgICAgICAgICAgZmlsZS5wcm9ncmVzcyA9IHtcbiAgICAgICAgICAgICAgc3RhdHVzOiBVcGxvYWRTdGF0dXMuVXBsb2FkaW5nLFxuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZTogcGVyY2VudGFnZSxcbiAgICAgICAgICAgICAgICBzcGVlZDogc3BlZWQsXG4gICAgICAgICAgICAgICAgc3BlZWRIdW1hbjogYCR7aHVtYW5pemVCeXRlcyhzcGVlZCl9L3NgLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogcHJvZ3Jlc3NTdGFydFRpbWUsXG4gICAgICAgICAgICAgICAgZW5kVGltZTogbnVsbCxcbiAgICAgICAgICAgICAgICBldGE6IGV0YSxcbiAgICAgICAgICAgICAgICBldGFIdW1hbjogdGhpcy5zZWNvbmRzVG9IdW1hbihldGEpLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh7IHR5cGU6ICd1cGxvYWRpbmcnLCBmaWxlOiBmaWxlIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG5cbiAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KTtcblxuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgY29uc3Qgc3BlZWRBdmVyYWdlID0gTWF0aC5yb3VuZChcbiAgICAgICAgICAgIChmaWxlLnNpemUgLyAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBwcm9ncmVzc1N0YXJ0VGltZSkpICogMTAwMFxuICAgICAgICAgICk7XG4gICAgICAgICAgZmlsZS5wcm9ncmVzcyA9IHtcbiAgICAgICAgICAgIHN0YXR1czogVXBsb2FkU3RhdHVzLkRvbmUsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIHBlcmNlbnRhZ2U6IDEwMCxcbiAgICAgICAgICAgICAgc3BlZWQ6IHNwZWVkQXZlcmFnZSxcbiAgICAgICAgICAgICAgc3BlZWRIdW1hbjogYCR7aHVtYW5pemVCeXRlcyhzcGVlZEF2ZXJhZ2UpfS9zYCxcbiAgICAgICAgICAgICAgc3RhcnRUaW1lOiBwcm9ncmVzc1N0YXJ0VGltZSxcbiAgICAgICAgICAgICAgZW5kVGltZTogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgIGV0YTogZXRhLFxuICAgICAgICAgICAgICBldGFIdW1hbjogdGhpcy5zZWNvbmRzVG9IdW1hbihldGEgfHwgMCksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBmaWxlLnJlc3BvbnNlU3RhdHVzID0geGhyLnN0YXR1cztcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmaWxlLnJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGZpbGUucmVzcG9uc2UgPSB4aHIucmVzcG9uc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmlsZS5yZXNwb25zZUhlYWRlcnMgPSB0aGlzLnBhcnNlUmVzcG9uc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSk7XG5cbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHsgdHlwZTogJ2RvbmUnLCBmaWxlOiBmaWxlIH0pO1xuXG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IGV2ZW50LndpdGhDcmVkZW50aWFscyA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXBsb2FkRmlsZSA9IDxCbG9iRmlsZT5maWxlLm5hdGl2ZUZpbGU7XG4gICAgICAgIGNvbnN0IHVwbG9hZEluZGV4ID0gdGhpcy5xdWV1ZS5maW5kSW5kZXgob3V0RmlsZSA9PiBvdXRGaWxlLm5hdGl2ZUZpbGUgPT09IHVwbG9hZEZpbGUpO1xuXG4gICAgICAgIGlmICh0aGlzLnF1ZXVlW3VwbG9hZEluZGV4XS5wcm9ncmVzcy5zdGF0dXMgPT09IFVwbG9hZFN0YXR1cy5DYW5jZWxsZWQpIHtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChrZXkgPT4gZmlsZS5mb3JtLmFwcGVuZChrZXksIGRhdGFba2V5XSkpO1xuICAgICAgICBPYmplY3Qua2V5cyhoZWFkZXJzKS5mb3JFYWNoKGtleSA9PiB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcnNba2V5XSkpO1xuXG4gICAgICAgIGZpbGUuZm9ybS5hcHBlbmQoZXZlbnQuZmllbGROYW1lIHx8ICdmaWxlJywgdXBsb2FkRmlsZSwgdXBsb2FkRmlsZS5uYW1lKTtcblxuICAgICAgICB0aGlzLnNlcnZpY2VFdmVudHMuZW1pdCh7IHR5cGU6ICdzdGFydCcsIGZpbGU6IGZpbGUgfSk7XG4gICAgICAgIHhoci5zZW5kKGZpbGUuZm9ybSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHhoci5hYm9ydCgpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlY29uZHNUb0h1bWFuKHNlYzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IERhdGUoc2VjICogMTAwMCkudG9JU09TdHJpbmcoKS5zdWJzdHIoMTEsIDgpO1xuICB9XG5cbiAgZ2VuZXJhdGVJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpXG4gICAgICAudG9TdHJpbmcoMzYpXG4gICAgICAuc3Vic3RyaW5nKDcpO1xuICB9XG5cbiAgc2V0Q29udGVudFR5cGVzKGNvbnRlbnRUeXBlczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIGNvbnRlbnRUeXBlcyAhPT0gJ3VuZGVmaW5lZCcgJiYgY29udGVudFR5cGVzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGlmIChjb250ZW50VHlwZXMuZmluZCgodHlwZTogc3RyaW5nKSA9PiB0eXBlID09PSAnKicpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5jb250ZW50VHlwZXMgPSBbJyonXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGVudFR5cGVzID0gY29udGVudFR5cGVzO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNvbnRlbnRUeXBlcyA9IFsnKiddO1xuICB9XG5cbiAgYWxsQ29udGVudFR5cGVzQWxsb3dlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50VHlwZXMuZmluZCgodHlwZTogc3RyaW5nKSA9PiB0eXBlID09PSAnKicpICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBpc0NvbnRlbnRUeXBlQWxsb3dlZChtaW1ldHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuYWxsQ29udGVudFR5cGVzQWxsb3dlZCgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29udGVudFR5cGVzLmZpbmQoKHR5cGU6IHN0cmluZykgPT4gdHlwZSA9PT0gbWltZXR5cGUpICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBtYWtlVXBsb2FkRmlsZShmaWxlOiBGaWxlLCBpbmRleDogbnVtYmVyKTogVXBsb2FkRmlsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbGVJbmRleDogaW5kZXgsXG4gICAgICBpZDogdGhpcy5nZW5lcmF0ZUlkKCksXG4gICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgICB0eXBlOiBmaWxlLnR5cGUsXG4gICAgICBmb3JtOiBuZXcgRm9ybURhdGEoKSxcbiAgICAgIHByb2dyZXNzOiB7XG4gICAgICAgIHN0YXR1czogVXBsb2FkU3RhdHVzLlF1ZXVlLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgcGVyY2VudGFnZTogMCxcbiAgICAgICAgICBzcGVlZDogMCxcbiAgICAgICAgICBzcGVlZEh1bWFuOiBgJHtodW1hbml6ZUJ5dGVzKDApfS9zYCxcbiAgICAgICAgICBzdGFydFRpbWU6IG51bGwsXG4gICAgICAgICAgZW5kVGltZTogbnVsbCxcbiAgICAgICAgICBldGE6IG51bGwsXG4gICAgICAgICAgZXRhSHVtYW46IG51bGwsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgbGFzdE1vZGlmaWVkRGF0ZTogZmlsZS5sYXN0TW9kaWZpZWQsXG4gICAgICBzdWI6IHVuZGVmaW5lZCxcbiAgICAgIG5hdGl2ZUZpbGU6IGZpbGUsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VSZXNwb25zZUhlYWRlcnMoaHR0cEhlYWRlcnM6IGFueSkge1xuICAgIGlmICghaHR0cEhlYWRlcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGh0dHBIZWFkZXJzXG4gICAgICAuc3BsaXQoJ1xcbicpXG4gICAgICAubWFwKCh4OiBhbnkpID0+IHguc3BsaXQoLzogKi8sIDIpKVxuICAgICAgLmZpbHRlcigoeDogYW55KSA9PiB4WzBdKVxuICAgICAgLnJlZHVjZSgoYWM6IGFueSwgeDogYW55KSA9PiB7XG4gICAgICAgIGFjW3hbMF1dID0geFsxXTtcbiAgICAgICAgcmV0dXJuIGFjO1xuICAgICAgfSwge30pO1xuICB9XG59XG4iXX0=