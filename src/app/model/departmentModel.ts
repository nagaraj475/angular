export class DepartmentModel {
    constructor(
        public id: number,
        public name: string,
        public nationality: string,
        public age?: number
    ) {}
}