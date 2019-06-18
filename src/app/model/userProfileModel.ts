export class UserProfileModel {
    constructor(
        public firstName: string,
        public lastName: string,
        public nationality: string,
        public email: string,
        public univName: string,
        public degree: string,
        public majorName: string,
        public marks: string,
        public address1: string,
        public address2: string,
        public city: string,
        public state: string,
        public zipCode: string
    ) {}
}