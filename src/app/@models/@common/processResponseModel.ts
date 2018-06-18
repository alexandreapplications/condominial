export class ProcessResponseModel {
    constructor(public errorName: string,
        public errors?: string[],
        public warnings?: string[],
        public errorDetail?: any) {
    }
}
