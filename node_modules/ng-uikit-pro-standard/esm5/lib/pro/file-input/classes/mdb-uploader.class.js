/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var UploadStatus = {
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
    var k = 1024;
    /** @type {?} */
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    /** @type {?} */
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
var MDBUploaderService = /** @class */ (function () {
    function MDBUploaderService(concurrency, contentTypes, maxUploads) {
        var _this = this;
        if (concurrency === void 0) { concurrency = Number.POSITIVE_INFINITY; }
        if (contentTypes === void 0) { contentTypes = ['*']; }
        if (maxUploads === void 0) { maxUploads = Number.POSITIVE_INFINITY; }
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
        function (upload) { return _this.startUpload(upload); }), concurrency))
            .subscribe((/**
         * @param {?} uploadOutput
         * @return {?}
         */
        function (uploadOutput) { return _this.serviceEvents.emit(uploadOutput); }));
    }
    /**
     * @param {?} incomingFiles
     * @return {?}
     */
    MDBUploaderService.prototype.handleFiles = /**
     * @param {?} incomingFiles
     * @return {?}
     */
    function (incomingFiles) {
        var _this = this;
        var _a;
        /** @type {?} */
        var allowedIncomingFiles = [].reduce.call(incomingFiles, (/**
         * @param {?} acc
         * @param {?} checkFile
         * @param {?} i
         * @return {?}
         */
        function (acc, checkFile, i) {
            /** @type {?} */
            var futureQueueLength = acc.length + _this.queue.length + 1;
            if (_this.isContentTypeAllowed(checkFile.type) && futureQueueLength <= _this.maxUploads) {
                acc = acc.concat(checkFile);
            }
            else {
                /** @type {?} */
                var rejectedFile = _this.makeUploadFile(checkFile, i);
                _this.serviceEvents.emit({ type: 'rejected', file: rejectedFile });
            }
            return acc;
        }), []);
        (_a = this.queue).push.apply(_a, tslib_1.__spread([].map.call(allowedIncomingFiles, (/**
         * @param {?} file
         * @param {?} i
         * @return {?}
         */
        function (file, i) {
            /** @type {?} */
            var uploadFile = _this.makeUploadFile(file, i);
            _this.serviceEvents.emit({ type: 'addedToQueue', file: uploadFile });
            return uploadFile;
        }))));
        this.serviceEvents.emit({ type: 'allAddedToQueue' });
    };
    /**
     * @param {?} input
     * @return {?}
     */
    MDBUploaderService.prototype.initInputEvents = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        var _this = this;
        return input.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            switch (event.type) {
                case 'uploadFile':
                    /** @type {?} */
                    var uploadFileIndex = _this.queue.findIndex((/**
                     * @param {?} file
                     * @return {?}
                     */
                    function (file) { return file === event.file; }));
                    if (uploadFileIndex !== -1 && event.file) {
                        _this.uploadScheduler.next({ file: _this.queue[uploadFileIndex], event: event });
                    }
                    break;
                case 'uploadAll':
                    /** @type {?} */
                    var files = _this.queue.filter((/**
                     * @param {?} file
                     * @return {?}
                     */
                    function (file) { return file.progress.status === UploadStatus.Queue; }));
                    files.forEach((/**
                     * @param {?} file
                     * @return {?}
                     */
                    function (file) { return _this.uploadScheduler.next({ file: file, event: event }); }));
                    break;
                case 'cancel':
                    /** @type {?} */
                    var id_1 = event.id || null;
                    if (!id_1) {
                        return;
                    }
                    /** @type {?} */
                    var index = _this.subs.findIndex((/**
                     * @param {?} sub
                     * @return {?}
                     */
                    function (sub) { return sub.id === id_1; }));
                    if (index !== -1 && _this.subs[index].sub) {
                        _this.subs[index].sub.unsubscribe();
                        /** @type {?} */
                        var fileIndex = _this.queue.findIndex((/**
                         * @param {?} file
                         * @return {?}
                         */
                        function (file) { return file.id === id_1; }));
                        if (fileIndex !== -1) {
                            _this.queue[fileIndex].progress.status = UploadStatus.Cancelled;
                            _this.serviceEvents.emit({ type: 'cancelled', file: _this.queue[fileIndex] });
                        }
                    }
                    break;
                case 'cancelAll':
                    _this.subs.forEach((/**
                     * @param {?} sub
                     * @return {?}
                     */
                    function (sub) {
                        if (sub.sub) {
                            sub.sub.unsubscribe();
                        }
                        /** @type {?} */
                        var file = _this.queue.find((/**
                         * @param {?} uploadFile
                         * @return {?}
                         */
                        function (uploadFile) { return uploadFile.id === sub.id; }));
                        if (file) {
                            file.progress.status = UploadStatus.Cancelled;
                            _this.serviceEvents.emit({ type: 'cancelled', file: file });
                        }
                    }));
                    break;
                case 'remove':
                    if (!event.id) {
                        return;
                    }
                    /** @type {?} */
                    var i = _this.queue.findIndex((/**
                     * @param {?} file
                     * @return {?}
                     */
                    function (file) { return file.id === event.id; }));
                    if (i !== -1) {
                        /** @type {?} */
                        var file = _this.queue[i];
                        _this.queue.splice(i, 1);
                        _this.serviceEvents.emit({ type: 'removed', file: file });
                    }
                    break;
                case 'removeAll':
                    if (_this.queue.length) {
                        _this.queue = [];
                        _this.serviceEvents.emit({ type: 'removedAll' });
                    }
                    break;
            }
        }));
    };
    /**
     * @param {?} upload
     * @return {?}
     */
    MDBUploaderService.prototype.startUpload = /**
     * @param {?} upload
     * @return {?}
     */
    function (upload) {
        var _this = this;
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var sub = _this.uploadFile(upload.file, upload.event).subscribe((/**
             * @param {?} output
             * @return {?}
             */
            function (output) {
                observer.next(output);
            }), (/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                observer.error(err);
                observer.complete();
            }), (/**
             * @return {?}
             */
            function () {
                observer.complete();
            }));
            _this.subs.push({ id: upload.file.id, sub: sub });
        }));
    };
    /**
     * @param {?} file
     * @param {?} event
     * @return {?}
     */
    MDBUploaderService.prototype.uploadFile = /**
     * @param {?} file
     * @param {?} event
     * @return {?}
     */
    function (file, event) {
        var _this = this;
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var url = event.url || '';
            /** @type {?} */
            var method = event.method || 'POST';
            /** @type {?} */
            var data = event.data || {};
            /** @type {?} */
            var headers = event.headers || {};
            /** @type {?} */
            var xhr = new XMLHttpRequest();
            /** @type {?} */
            var time = new Date().getTime();
            /** @type {?} */
            var progressStartTime = (file.progress.data && file.progress.data.startTime) || time;
            /** @type {?} */
            var speed = 0;
            /** @type {?} */
            var eta = null;
            xhr.upload.addEventListener('progress', (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                if (e.lengthComputable) {
                    /** @type {?} */
                    var percentage = Math.round((e.loaded * 100) / e.total);
                    /** @type {?} */
                    var diff = new Date().getTime() - time;
                    speed = Math.round((e.loaded / diff) * 1000);
                    progressStartTime =
                        (file.progress.data && file.progress.data.startTime) || new Date().getTime();
                    eta = Math.ceil((e.total - e.loaded) / speed);
                    file.progress = {
                        status: UploadStatus.Uploading,
                        data: {
                            percentage: percentage,
                            speed: speed,
                            speedHuman: humanizeBytes(speed) + "/s",
                            startTime: progressStartTime,
                            endTime: null,
                            eta: eta,
                            etaHuman: _this.secondsToHuman(eta),
                        },
                    };
                    observer.next({ type: 'uploading', file: file });
                }
            }), false);
            xhr.upload.addEventListener('error', (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                observer.error(e);
                observer.complete();
            }));
            xhr.onreadystatechange = (/**
             * @return {?}
             */
            function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    /** @type {?} */
                    var speedAverage = Math.round((file.size / (new Date().getTime() - progressStartTime)) * 1000);
                    file.progress = {
                        status: UploadStatus.Done,
                        data: {
                            percentage: 100,
                            speed: speedAverage,
                            speedHuman: humanizeBytes(speedAverage) + "/s",
                            startTime: progressStartTime,
                            endTime: new Date().getTime(),
                            eta: eta,
                            etaHuman: _this.secondsToHuman(eta || 0),
                        },
                    };
                    file.responseStatus = xhr.status;
                    try {
                        file.response = JSON.parse(xhr.response);
                    }
                    catch (e) {
                        file.response = xhr.response;
                    }
                    file.responseHeaders = _this.parseResponseHeaders(xhr.getAllResponseHeaders());
                    observer.next({ type: 'done', file: file });
                    observer.complete();
                }
            });
            xhr.open(method, url, true);
            xhr.withCredentials = event.withCredentials ? true : false;
            try {
                /** @type {?} */
                var uploadFile_1 = (/** @type {?} */ (file.nativeFile));
                /** @type {?} */
                var uploadIndex = _this.queue.findIndex((/**
                 * @param {?} outFile
                 * @return {?}
                 */
                function (outFile) { return outFile.nativeFile === uploadFile_1; }));
                if (_this.queue[uploadIndex].progress.status === UploadStatus.Cancelled) {
                    observer.complete();
                }
                Object.keys(data).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return file.form.append(key, data[key]); }));
                Object.keys(headers).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return xhr.setRequestHeader(key, headers[key]); }));
                file.form.append(event.fieldName || 'file', uploadFile_1, uploadFile_1.name);
                _this.serviceEvents.emit({ type: 'start', file: file });
                xhr.send(file.form);
            }
            catch (e) {
                observer.complete();
            }
            return (/**
             * @return {?}
             */
            function () {
                xhr.abort();
            });
        }));
    };
    /**
     * @param {?} sec
     * @return {?}
     */
    MDBUploaderService.prototype.secondsToHuman = /**
     * @param {?} sec
     * @return {?}
     */
    function (sec) {
        return new Date(sec * 1000).toISOString().substr(11, 8);
    };
    /**
     * @return {?}
     */
    MDBUploaderService.prototype.generateId = /**
     * @return {?}
     */
    function () {
        return Math.random()
            .toString(36)
            .substring(7);
    };
    /**
     * @param {?} contentTypes
     * @return {?}
     */
    MDBUploaderService.prototype.setContentTypes = /**
     * @param {?} contentTypes
     * @return {?}
     */
    function (contentTypes) {
        if (typeof contentTypes !== 'undefined' && contentTypes instanceof Array) {
            if (contentTypes.find((/**
             * @param {?} type
             * @return {?}
             */
            function (type) { return type === '*'; })) !== undefined) {
                this.contentTypes = ['*'];
            }
            else {
                this.contentTypes = contentTypes;
            }
            return;
        }
        this.contentTypes = ['*'];
    };
    /**
     * @return {?}
     */
    MDBUploaderService.prototype.allContentTypesAllowed = /**
     * @return {?}
     */
    function () {
        return this.contentTypes.find((/**
         * @param {?} type
         * @return {?}
         */
        function (type) { return type === '*'; })) !== undefined;
    };
    /**
     * @param {?} mimetype
     * @return {?}
     */
    MDBUploaderService.prototype.isContentTypeAllowed = /**
     * @param {?} mimetype
     * @return {?}
     */
    function (mimetype) {
        if (this.allContentTypesAllowed()) {
            return true;
        }
        return this.contentTypes.find((/**
         * @param {?} type
         * @return {?}
         */
        function (type) { return type === mimetype; })) !== undefined;
    };
    /**
     * @param {?} file
     * @param {?} index
     * @return {?}
     */
    MDBUploaderService.prototype.makeUploadFile = /**
     * @param {?} file
     * @param {?} index
     * @return {?}
     */
    function (file, index) {
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
                    speedHuman: humanizeBytes(0) + "/s",
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
    };
    /**
     * @private
     * @param {?} httpHeaders
     * @return {?}
     */
    MDBUploaderService.prototype.parseResponseHeaders = /**
     * @private
     * @param {?} httpHeaders
     * @return {?}
     */
    function (httpHeaders) {
        if (!httpHeaders) {
            return;
        }
        return httpHeaders
            .split('\n')
            .map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.split(/: */, 2); }))
            .filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x[0]; }))
            .reduce((/**
         * @param {?} ac
         * @param {?} x
         * @return {?}
         */
        function (ac, x) {
            ac[x[0]] = x[1];
            return ac;
        }), {});
    };
    return MDBUploaderService;
}());
export { MDBUploaderService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXVwbG9hZGVyLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9maWxlLWlucHV0L2NsYXNzZXMvbWRiLXVwbG9hZGVyLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRTFDLHFDQUlDOzs7SUFIQyxzQ0FBb0I7O0lBQ3BCLDhDQUErQjs7SUFDL0IscUNBQW9COzs7OztBQUd0Qiw4QkFFQzs7O0lBREMsd0JBQWE7Ozs7SUFJYixRQUFLO0lBQ0wsWUFBUztJQUNULE9BQUk7SUFDSixZQUFTOzs7Ozs7Ozs7O0FBR1gsb0NBV0M7OztJQVZDLGdDQUFxQjs7SUFDckIsOEJBUUU7Ozs7O0FBR0osZ0NBY0M7OztJQWJDLHdCQUFXOztJQUNYLCtCQUFrQjs7SUFDbEIsc0NBQXlCOztJQUN6QiwwQkFBYTs7SUFDYiwwQkFBYTs7SUFDYiwwQkFBYTs7SUFDYiwwQkFBZTs7SUFDZiw4QkFBeUI7O0lBQ3pCLDhCQUFlOztJQUNmLG9DQUF3Qjs7SUFDeEIseUJBQXlCOztJQUN6QixnQ0FBa0I7O0lBQ2xCLHFDQUE0Qzs7Ozs7QUFHOUMsa0NBZ0JDOzs7SUFmQyw0QkFZZTs7SUFDZiw0QkFBa0I7O0lBQ2xCLGtDQUFrQjs7Ozs7QUFHcEIsaUNBV0M7OztJQVZDLDJCQUFtRjs7SUFDbkYsMEJBQWE7O0lBQ2IsNkJBQWdCOztJQUNoQix5QkFBWTs7SUFDWixnQ0FBbUI7O0lBQ25CLGdDQUFtQjs7SUFDbkIsMkJBQWtCOztJQUNsQiwyQkFBd0M7O0lBQ3hDLDhCQUFvQzs7SUFDcEMsc0NBQTBCOzs7Ozs7QUFHNUIsTUFBTSxV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QU07Ozs7UUFBQyxVQUFDLENBQU0sSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBSixDQUFJLEVBQUM7YUFDeEIsTUFBTTs7Ozs7UUFBQyxVQUFDLEVBQU8sRUFBRSxDQUFNO1lBQ3RCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBL1RELElBK1RDOzs7O0lBOVRDLG1DQUFvQjs7SUFDcEIsMkNBQTBDOztJQUMxQyw2Q0FBbUU7O0lBQ25FLGtDQUEwQzs7SUFDMUMsMENBQXVCOztJQUN2Qix3Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBsb2FkZXJPcHRpb25zIHtcbiAgY29uY3VycmVuY3k6IG51bWJlcjtcbiAgYWxsb3dlZENvbnRlbnRUeXBlcz86IHN0cmluZ1tdO1xuICBtYXhVcGxvYWRzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJsb2JGaWxlIGV4dGVuZHMgQmxvYiB7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gVXBsb2FkU3RhdHVzIHtcbiAgUXVldWUsXG4gIFVwbG9hZGluZyxcbiAgRG9uZSxcbiAgQ2FuY2VsbGVkLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwbG9hZFByb2dyZXNzIHtcbiAgc3RhdHVzOiBVcGxvYWRTdGF0dXM7XG4gIGRhdGE/OiB7XG4gICAgcGVyY2VudGFnZTogbnVtYmVyO1xuICAgIHNwZWVkOiBudW1iZXI7XG4gICAgc3BlZWRIdW1hbjogc3RyaW5nO1xuICAgIHN0YXJ0VGltZTogbnVtYmVyIHwgbnVsbDtcbiAgICBlbmRUaW1lOiBudW1iZXIgfCBudWxsO1xuICAgIGV0YTogbnVtYmVyIHwgbnVsbDtcbiAgICBldGFIdW1hbjogc3RyaW5nIHwgbnVsbDtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGxvYWRGaWxlIHtcbiAgaWQ6IHN0cmluZztcbiAgZmlsZUluZGV4OiBudW1iZXI7XG4gIGxhc3RNb2RpZmllZERhdGU6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBzaXplOiBudW1iZXI7XG4gIHR5cGU6IHN0cmluZztcbiAgZm9ybTogRm9ybURhdGE7XG4gIHByb2dyZXNzOiBVcGxvYWRQcm9ncmVzcztcbiAgcmVzcG9uc2U/OiBhbnk7XG4gIHJlc3BvbnNlU3RhdHVzPzogbnVtYmVyO1xuICBzdWI/OiBTdWJzY3JpcHRpb24gfCBhbnk7XG4gIG5hdGl2ZUZpbGU/OiBGaWxlO1xuICByZXNwb25zZUhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwbG9hZE91dHB1dCB7XG4gIHR5cGU6XG4gICAgfCAnYWRkZWRUb1F1ZXVlJ1xuICAgIHwgJ2FsbEFkZGVkVG9RdWV1ZSdcbiAgICB8ICd1cGxvYWRpbmcnXG4gICAgfCAnZG9uZSdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdjYW5jZWxsZWQnXG4gICAgfCAnZHJhZ092ZXInXG4gICAgfCAnZHJhZ091dCdcbiAgICB8ICdkcm9wJ1xuICAgIHwgJ3JlbW92ZWQnXG4gICAgfCAncmVtb3ZlZEFsbCdcbiAgICB8ICdyZWplY3RlZCc7XG4gIGZpbGU/OiBVcGxvYWRGaWxlO1xuICBuYXRpdmVGaWxlPzogRmlsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGxvYWRJbnB1dCB7XG4gIHR5cGU6ICd1cGxvYWRBbGwnIHwgJ3VwbG9hZEZpbGUnIHwgJ2NhbmNlbCcgfCAnY2FuY2VsQWxsJyB8ICdyZW1vdmUnIHwgJ3JlbW92ZUFsbCc7XG4gIHVybD86IHN0cmluZztcbiAgbWV0aG9kPzogc3RyaW5nO1xuICBpZD86IHN0cmluZztcbiAgZmllbGROYW1lPzogc3RyaW5nO1xuICBmaWxlSW5kZXg/OiBudW1iZXI7XG4gIGZpbGU/OiBVcGxvYWRGaWxlO1xuICBkYXRhPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBCbG9iIH07XG4gIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHVtYW5pemVCeXRlcyhieXRlczogbnVtYmVyKTogc3RyaW5nIHtcbiAgaWYgKGJ5dGVzID09PSAwKSB7XG4gICAgcmV0dXJuICcwIEJ5dGUnO1xuICB9XG5cbiAgY29uc3QgayA9IDEwMjQ7XG4gIGNvbnN0IHNpemVzOiBzdHJpbmdbXSA9IFsnQnl0ZXMnLCAnS0InLCAnTUInLCAnR0InLCAnVEInLCAnUEInXTtcbiAgY29uc3QgaTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZyhrKSk7XG5cbiAgcmV0dXJuIHBhcnNlRmxvYXQoKGJ5dGVzIC8gTWF0aC5wb3coaywgaSkpLnRvRml4ZWQoMikpICsgJyAnICsgc2l6ZXNbaV07XG59XG5cbmV4cG9ydCBjbGFzcyBNREJVcGxvYWRlclNlcnZpY2Uge1xuICBxdWV1ZTogVXBsb2FkRmlsZVtdO1xuICBzZXJ2aWNlRXZlbnRzOiBFdmVudEVtaXR0ZXI8VXBsb2FkT3V0cHV0PjtcbiAgdXBsb2FkU2NoZWR1bGVyOiBTdWJqZWN0PHsgZmlsZTogVXBsb2FkRmlsZTsgZXZlbnQ6IFVwbG9hZElucHV0IH0+O1xuICBzdWJzOiB7IGlkOiBzdHJpbmc7IHN1YjogU3Vic2NyaXB0aW9uIH1bXTtcbiAgY29udGVudFR5cGVzOiBzdHJpbmdbXTtcbiAgbWF4VXBsb2FkczogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbmN1cnJlbmN5OiBudW1iZXIgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksXG4gICAgY29udGVudFR5cGVzOiBzdHJpbmdbXSA9IFsnKiddLFxuICAgIG1heFVwbG9hZHM6IG51bWJlciA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWVxuICApIHtcbiAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgdGhpcy5zZXJ2aWNlRXZlbnRzID0gbmV3IEV2ZW50RW1pdHRlcjxVcGxvYWRPdXRwdXQ+KCk7XG4gICAgdGhpcy51cGxvYWRTY2hlZHVsZXIgPSBuZXcgU3ViamVjdCgpO1xuICAgIHRoaXMuc3VicyA9IFtdO1xuICAgIHRoaXMuY29udGVudFR5cGVzID0gY29udGVudFR5cGVzO1xuICAgIHRoaXMubWF4VXBsb2FkcyA9IG1heFVwbG9hZHM7XG5cbiAgICB0aGlzLnVwbG9hZFNjaGVkdWxlclxuICAgICAgLnBpcGUobWVyZ2VNYXAodXBsb2FkID0+IHRoaXMuc3RhcnRVcGxvYWQodXBsb2FkKSwgY29uY3VycmVuY3kpKVxuICAgICAgLnN1YnNjcmliZSh1cGxvYWRPdXRwdXQgPT4gdGhpcy5zZXJ2aWNlRXZlbnRzLmVtaXQodXBsb2FkT3V0cHV0KSk7XG4gIH1cblxuICBoYW5kbGVGaWxlcyhpbmNvbWluZ0ZpbGVzOiBGaWxlTGlzdCk6IHZvaWQge1xuICAgIGNvbnN0IGFsbG93ZWRJbmNvbWluZ0ZpbGVzOiBGaWxlW10gPSBbXS5yZWR1Y2UuY2FsbChcbiAgICAgIGluY29taW5nRmlsZXMsXG4gICAgICAoYWNjOiBGaWxlW10sIGNoZWNrRmlsZTogRmlsZSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGZ1dHVyZVF1ZXVlTGVuZ3RoID0gYWNjLmxlbmd0aCArIHRoaXMucXVldWUubGVuZ3RoICsgMTtcbiAgICAgICAgaWYgKHRoaXMuaXNDb250ZW50VHlwZUFsbG93ZWQoY2hlY2tGaWxlLnR5cGUpICYmIGZ1dHVyZVF1ZXVlTGVuZ3RoIDw9IHRoaXMubWF4VXBsb2Fkcykge1xuICAgICAgICAgIGFjYyA9IGFjYy5jb25jYXQoY2hlY2tGaWxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCByZWplY3RlZEZpbGU6IFVwbG9hZEZpbGUgPSB0aGlzLm1ha2VVcGxvYWRGaWxlKGNoZWNrRmlsZSwgaSk7XG4gICAgICAgICAgdGhpcy5zZXJ2aWNlRXZlbnRzLmVtaXQoeyB0eXBlOiAncmVqZWN0ZWQnLCBmaWxlOiByZWplY3RlZEZpbGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSxcbiAgICAgIFtdXG4gICAgKTtcblxuICAgIHRoaXMucXVldWUucHVzaChcbiAgICAgIC4uLltdLm1hcC5jYWxsKGFsbG93ZWRJbmNvbWluZ0ZpbGVzLCAoZmlsZTogRmlsZSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHVwbG9hZEZpbGU6IFVwbG9hZEZpbGUgPSB0aGlzLm1ha2VVcGxvYWRGaWxlKGZpbGUsIGkpO1xuICAgICAgICB0aGlzLnNlcnZpY2VFdmVudHMuZW1pdCh7IHR5cGU6ICdhZGRlZFRvUXVldWUnLCBmaWxlOiB1cGxvYWRGaWxlIH0pO1xuICAgICAgICByZXR1cm4gdXBsb2FkRmlsZTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuc2VydmljZUV2ZW50cy5lbWl0KHsgdHlwZTogJ2FsbEFkZGVkVG9RdWV1ZScgfSk7XG4gIH1cblxuICBpbml0SW5wdXRFdmVudHMoaW5wdXQ6IEV2ZW50RW1pdHRlcjxVcGxvYWRJbnB1dD4pOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiBpbnB1dC5zdWJzY3JpYmUoKGV2ZW50OiBVcGxvYWRJbnB1dCkgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3VwbG9hZEZpbGUnOlxuICAgICAgICAgIGNvbnN0IHVwbG9hZEZpbGVJbmRleCA9IHRoaXMucXVldWUuZmluZEluZGV4KGZpbGUgPT4gZmlsZSA9PT0gZXZlbnQuZmlsZSk7XG4gICAgICAgICAgaWYgKHVwbG9hZEZpbGVJbmRleCAhPT0gLTEgJiYgZXZlbnQuZmlsZSkge1xuICAgICAgICAgICAgdGhpcy51cGxvYWRTY2hlZHVsZXIubmV4dCh7IGZpbGU6IHRoaXMucXVldWVbdXBsb2FkRmlsZUluZGV4XSwgZXZlbnQ6IGV2ZW50IH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndXBsb2FkQWxsJzpcbiAgICAgICAgICBjb25zdCBmaWxlcyA9IHRoaXMucXVldWUuZmlsdGVyKGZpbGUgPT4gZmlsZS5wcm9ncmVzcy5zdGF0dXMgPT09IFVwbG9hZFN0YXR1cy5RdWV1ZSk7XG4gICAgICAgICAgZmlsZXMuZm9yRWFjaChmaWxlID0+IHRoaXMudXBsb2FkU2NoZWR1bGVyLm5leHQoeyBmaWxlOiBmaWxlLCBldmVudDogZXZlbnQgfSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjYW5jZWwnOlxuICAgICAgICAgIGNvbnN0IGlkID0gZXZlbnQuaWQgfHwgbnVsbDtcbiAgICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnN1YnMuZmluZEluZGV4KHN1YiA9PiBzdWIuaWQgPT09IGlkKTtcbiAgICAgICAgICBpZiAoaW5kZXggIT09IC0xICYmIHRoaXMuc3Vic1tpbmRleF0uc3ViKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNbaW5kZXhdLnN1Yi51bnN1YnNjcmliZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBmaWxlSW5kZXggPSB0aGlzLnF1ZXVlLmZpbmRJbmRleChmaWxlID0+IGZpbGUuaWQgPT09IGlkKTtcbiAgICAgICAgICAgIGlmIChmaWxlSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgIHRoaXMucXVldWVbZmlsZUluZGV4XS5wcm9ncmVzcy5zdGF0dXMgPSBVcGxvYWRTdGF0dXMuQ2FuY2VsbGVkO1xuICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VFdmVudHMuZW1pdCh7IHR5cGU6ICdjYW5jZWxsZWQnLCBmaWxlOiB0aGlzLnF1ZXVlW2ZpbGVJbmRleF0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjYW5jZWxBbGwnOlxuICAgICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiB7XG4gICAgICAgICAgICBpZiAoc3ViLnN1Yikge1xuICAgICAgICAgICAgICBzdWIuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLnF1ZXVlLmZpbmQodXBsb2FkRmlsZSA9PiB1cGxvYWRGaWxlLmlkID09PSBzdWIuaWQpO1xuICAgICAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgICAgZmlsZS5wcm9ncmVzcy5zdGF0dXMgPSBVcGxvYWRTdGF0dXMuQ2FuY2VsbGVkO1xuICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VFdmVudHMuZW1pdCh7IHR5cGU6ICdjYW5jZWxsZWQnLCBmaWxlOiBmaWxlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZW1vdmUnOlxuICAgICAgICAgIGlmICghZXZlbnQuaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpID0gdGhpcy5xdWV1ZS5maW5kSW5kZXgoZmlsZSA9PiBmaWxlLmlkID09PSBldmVudC5pZCk7XG4gICAgICAgICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlID0gdGhpcy5xdWV1ZVtpXTtcbiAgICAgICAgICAgIHRoaXMucXVldWUuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlRXZlbnRzLmVtaXQoeyB0eXBlOiAncmVtb3ZlZCcsIGZpbGU6IGZpbGUgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZW1vdmVBbGwnOlxuICAgICAgICAgIGlmICh0aGlzLnF1ZXVlLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlRXZlbnRzLmVtaXQoeyB0eXBlOiAncmVtb3ZlZEFsbCcgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhcnRVcGxvYWQodXBsb2FkOiB7IGZpbGU6IFVwbG9hZEZpbGU7IGV2ZW50OiBVcGxvYWRJbnB1dCB9KTogT2JzZXJ2YWJsZTxVcGxvYWRPdXRwdXQ+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgY29uc3Qgc3ViID0gdGhpcy51cGxvYWRGaWxlKHVwbG9hZC5maWxlLCB1cGxvYWQuZXZlbnQpLnN1YnNjcmliZShcbiAgICAgICAgb3V0cHV0ID0+IHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KG91dHB1dCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgdGhpcy5zdWJzLnB1c2goeyBpZDogdXBsb2FkLmZpbGUuaWQsIHN1Yjogc3ViIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgdXBsb2FkRmlsZShmaWxlOiBVcGxvYWRGaWxlLCBldmVudDogVXBsb2FkSW5wdXQpOiBPYnNlcnZhYmxlPFVwbG9hZE91dHB1dD4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XG4gICAgICBjb25zdCB1cmwgPSBldmVudC51cmwgfHwgJyc7XG4gICAgICBjb25zdCBtZXRob2QgPSBldmVudC5tZXRob2QgfHwgJ1BPU1QnO1xuICAgICAgY29uc3QgZGF0YSA9IGV2ZW50LmRhdGEgfHwge307XG4gICAgICBjb25zdCBoZWFkZXJzID0gZXZlbnQuaGVhZGVycyB8fCB7fTtcblxuICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICBjb25zdCB0aW1lOiBudW1iZXIgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIGxldCBwcm9ncmVzc1N0YXJ0VGltZTogbnVtYmVyID0gKGZpbGUucHJvZ3Jlc3MuZGF0YSAmJiBmaWxlLnByb2dyZXNzLmRhdGEuc3RhcnRUaW1lKSB8fCB0aW1lO1xuICAgICAgbGV0IHNwZWVkID0gMDtcbiAgICAgIGxldCBldGE6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdwcm9ncmVzcycsXG4gICAgICAgIChlOiBQcm9ncmVzc0V2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGUubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IE1hdGgucm91bmQoKGUubG9hZGVkICogMTAwKSAvIGUudG90YWwpO1xuICAgICAgICAgICAgY29uc3QgZGlmZiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGltZTtcbiAgICAgICAgICAgIHNwZWVkID0gTWF0aC5yb3VuZCgoZS5sb2FkZWQgLyBkaWZmKSAqIDEwMDApO1xuICAgICAgICAgICAgcHJvZ3Jlc3NTdGFydFRpbWUgPVxuICAgICAgICAgICAgICAoZmlsZS5wcm9ncmVzcy5kYXRhICYmIGZpbGUucHJvZ3Jlc3MuZGF0YS5zdGFydFRpbWUpIHx8IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgZXRhID0gTWF0aC5jZWlsKChlLnRvdGFsIC0gZS5sb2FkZWQpIC8gc3BlZWQpO1xuXG4gICAgICAgICAgICBmaWxlLnByb2dyZXNzID0ge1xuICAgICAgICAgICAgICBzdGF0dXM6IFVwbG9hZFN0YXR1cy5VcGxvYWRpbmcsXG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlOiBwZXJjZW50YWdlLFxuICAgICAgICAgICAgICAgIHNwZWVkOiBzcGVlZCxcbiAgICAgICAgICAgICAgICBzcGVlZEh1bWFuOiBgJHtodW1hbml6ZUJ5dGVzKHNwZWVkKX0vc2AsXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lOiBwcm9ncmVzc1N0YXJ0VGltZSxcbiAgICAgICAgICAgICAgICBlbmRUaW1lOiBudWxsLFxuICAgICAgICAgICAgICAgIGV0YTogZXRhLFxuICAgICAgICAgICAgICAgIGV0YUh1bWFuOiB0aGlzLnNlY29uZHNUb0h1bWFuKGV0YSksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHsgdHlwZTogJ3VwbG9hZGluZycsIGZpbGU6IGZpbGUgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcblxuICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIChlOiBFdmVudCkgPT4ge1xuICAgICAgICBvYnNlcnZlci5lcnJvcihlKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pO1xuXG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcbiAgICAgICAgICBjb25zdCBzcGVlZEF2ZXJhZ2UgPSBNYXRoLnJvdW5kKFxuICAgICAgICAgICAgKGZpbGUuc2l6ZSAvIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHByb2dyZXNzU3RhcnRUaW1lKSkgKiAxMDAwXG4gICAgICAgICAgKTtcbiAgICAgICAgICBmaWxlLnByb2dyZXNzID0ge1xuICAgICAgICAgICAgc3RhdHVzOiBVcGxvYWRTdGF0dXMuRG9uZSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgcGVyY2VudGFnZTogMTAwLFxuICAgICAgICAgICAgICBzcGVlZDogc3BlZWRBdmVyYWdlLFxuICAgICAgICAgICAgICBzcGVlZEh1bWFuOiBgJHtodW1hbml6ZUJ5dGVzKHNwZWVkQXZlcmFnZSl9L3NgLFxuICAgICAgICAgICAgICBzdGFydFRpbWU6IHByb2dyZXNzU3RhcnRUaW1lLFxuICAgICAgICAgICAgICBlbmRUaW1lOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgZXRhOiBldGEsXG4gICAgICAgICAgICAgIGV0YUh1bWFuOiB0aGlzLnNlY29uZHNUb0h1bWFuKGV0YSB8fCAwKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGZpbGUucmVzcG9uc2VTdGF0dXMgPSB4aHIuc3RhdHVzO1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZpbGUucmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZmlsZS5yZXNwb25zZSA9IHhoci5yZXNwb25zZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaWxlLnJlc3BvbnNlSGVhZGVycyA9IHRoaXMucGFyc2VSZXNwb25zZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKTtcblxuICAgICAgICAgIG9ic2VydmVyLm5leHQoeyB0eXBlOiAnZG9uZScsIGZpbGU6IGZpbGUgfSk7XG5cbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XG4gICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gZXZlbnQud2l0aENyZWRlbnRpYWxzID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB1cGxvYWRGaWxlID0gPEJsb2JGaWxlPmZpbGUubmF0aXZlRmlsZTtcbiAgICAgICAgY29uc3QgdXBsb2FkSW5kZXggPSB0aGlzLnF1ZXVlLmZpbmRJbmRleChvdXRGaWxlID0+IG91dEZpbGUubmF0aXZlRmlsZSA9PT0gdXBsb2FkRmlsZSk7XG5cbiAgICAgICAgaWYgKHRoaXMucXVldWVbdXBsb2FkSW5kZXhdLnByb2dyZXNzLnN0YXR1cyA9PT0gVXBsb2FkU3RhdHVzLkNhbmNlbGxlZCkge1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGtleSA9PiBmaWxlLmZvcm0uYXBwZW5kKGtleSwgZGF0YVtrZXldKSk7XG4gICAgICAgIE9iamVjdC5rZXlzKGhlYWRlcnMpLmZvckVhY2goa2V5ID0+IHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgaGVhZGVyc1trZXldKSk7XG5cbiAgICAgICAgZmlsZS5mb3JtLmFwcGVuZChldmVudC5maWVsZE5hbWUgfHwgJ2ZpbGUnLCB1cGxvYWRGaWxlLCB1cGxvYWRGaWxlLm5hbWUpO1xuXG4gICAgICAgIHRoaXMuc2VydmljZUV2ZW50cy5lbWl0KHsgdHlwZTogJ3N0YXJ0JywgZmlsZTogZmlsZSB9KTtcbiAgICAgICAgeGhyLnNlbmQoZmlsZS5mb3JtKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgeGhyLmFib3J0KCk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgc2Vjb25kc1RvSHVtYW4oc2VjOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgRGF0ZShzZWMgKiAxMDAwKS50b0lTT1N0cmluZygpLnN1YnN0cigxMSwgOCk7XG4gIH1cblxuICBnZW5lcmF0ZUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKClcbiAgICAgIC50b1N0cmluZygzNilcbiAgICAgIC5zdWJzdHJpbmcoNyk7XG4gIH1cblxuICBzZXRDb250ZW50VHlwZXMoY29udGVudFR5cGVzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgY29udGVudFR5cGVzICE9PSAndW5kZWZpbmVkJyAmJiBjb250ZW50VHlwZXMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgaWYgKGNvbnRlbnRUeXBlcy5maW5kKCh0eXBlOiBzdHJpbmcpID0+IHR5cGUgPT09ICcqJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmNvbnRlbnRUeXBlcyA9IFsnKiddO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250ZW50VHlwZXMgPSBjb250ZW50VHlwZXM7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY29udGVudFR5cGVzID0gWycqJ107XG4gIH1cblxuICBhbGxDb250ZW50VHlwZXNBbGxvd2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnRUeXBlcy5maW5kKCh0eXBlOiBzdHJpbmcpID0+IHR5cGUgPT09ICcqJykgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlzQ29udGVudFR5cGVBbGxvd2VkKG1pbWV0eXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5hbGxDb250ZW50VHlwZXNBbGxvd2VkKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb250ZW50VHlwZXMuZmluZCgodHlwZTogc3RyaW5nKSA9PiB0eXBlID09PSBtaW1ldHlwZSkgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIG1ha2VVcGxvYWRGaWxlKGZpbGU6IEZpbGUsIGluZGV4OiBudW1iZXIpOiBVcGxvYWRGaWxlIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmlsZUluZGV4OiBpbmRleCxcbiAgICAgIGlkOiB0aGlzLmdlbmVyYXRlSWQoKSxcbiAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgIHR5cGU6IGZpbGUudHlwZSxcbiAgICAgIGZvcm06IG5ldyBGb3JtRGF0YSgpLFxuICAgICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgc3RhdHVzOiBVcGxvYWRTdGF0dXMuUXVldWUsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBwZXJjZW50YWdlOiAwLFxuICAgICAgICAgIHNwZWVkOiAwLFxuICAgICAgICAgIHNwZWVkSHVtYW46IGAke2h1bWFuaXplQnl0ZXMoMCl9L3NgLFxuICAgICAgICAgIHN0YXJ0VGltZTogbnVsbCxcbiAgICAgICAgICBlbmRUaW1lOiBudWxsLFxuICAgICAgICAgIGV0YTogbnVsbCxcbiAgICAgICAgICBldGFIdW1hbjogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBsYXN0TW9kaWZpZWREYXRlOiBmaWxlLmxhc3RNb2RpZmllZCxcbiAgICAgIHN1YjogdW5kZWZpbmVkLFxuICAgICAgbmF0aXZlRmlsZTogZmlsZSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZVJlc3BvbnNlSGVhZGVycyhodHRwSGVhZGVyczogYW55KSB7XG4gICAgaWYgKCFodHRwSGVhZGVycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gaHR0cEhlYWRlcnNcbiAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgIC5tYXAoKHg6IGFueSkgPT4geC5zcGxpdCgvOiAqLywgMikpXG4gICAgICAuZmlsdGVyKCh4OiBhbnkpID0+IHhbMF0pXG4gICAgICAucmVkdWNlKChhYzogYW55LCB4OiBhbnkpID0+IHtcbiAgICAgICAgYWNbeFswXV0gPSB4WzFdO1xuICAgICAgICByZXR1cm4gYWM7XG4gICAgICB9LCB7fSk7XG4gIH1cbn1cbiJdfQ==