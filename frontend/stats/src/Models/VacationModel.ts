export class VacationModel {
    constructor(
        public destination: string, // "all" or a specific destination
        public pastVacations: number, // Count of past vacations
        public ongoingVacations: number, // Count of ongoing vacations
        public futureVacations: number // Count of future vacations
    ) {}

    // Example method: Calculate the total number of vacations
    getTotalVacations(): number {
        return this.pastVacations + this.ongoingVacations + this.futureVacations;
    }
}
