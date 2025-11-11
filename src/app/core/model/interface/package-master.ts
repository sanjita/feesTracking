export interface PackageMaster {
    // data: PackageMaster[]
    // packageId: number
    // packageName: string,
    // oneTimeTotalCost: number,
    // emiTotalCost: number,
    // maxBranches: number,
    // maxStudents: number,
    // isSmsAlert: true


    data?: PackageMaster[]
    packageId?: number
    packageName?: string,
    oneTimeTotalCost?: number,
    emiTotalCost?: number,
    maxBranches?: number,
    maxStudents?: number,
    isSmsAlert?: true


}

export interface ApiResponseModel {
    data:any;
    message: string
}
