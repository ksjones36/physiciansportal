import * as moment from 'moment';

export class Patient {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    sex: string;
    cancerType: string;
    cancerStage: number;
    submissionDate: string;
    physicianId: number;

    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.age = 0;
        this.sex = 'Male';
        this.cancerType = 'Colon';
        this.cancerStage = 0;
        this.submissionDate = moment().format(moment.HTML5_FMT.DATETIME_LOCAL);
        this.physicianId = 0;
    }
}
