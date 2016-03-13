'use strict';

export class NotifyTestController {

    header: string;
    content: string;
    category: string;

    static $inject = ['sampleNotificatorService', '$http'];

    constructor(private sampleNotificatorService: any, private $http: any) {

    }

    testNotification() {
        this.sampleNotificatorService.notify(this.content, this.header, this.category.toLowerCase());
    }

    backendSimulate() {
        this.$http({
            method: 'POST',
            url: 'http://putsreq.com/lvpo0e1q4abkR3aCm5EE'
        }).then((response) => {
            for (let index = 0; index < response.data.length; index++) {
                let notification = response.data[index];
                let callback = (result) => {
                    this.$http({
                        method: 'POST',
                        url: 'http://putsreq.com/rKSAaIgrG3slBuOZRhhE',
                        data: {
                            id: notification.id,
                            from: notification.from,
                            result: result
                        }
                    });
                }     
                this.sampleNotificatorService.notify(notification.content, notification.header, notification.category, notification.type, callback);
            }
        }, (response) => {
            this.sampleNotificatorService.notify('Error getting data from server', 'Server error', 'error');
        });
    }

};