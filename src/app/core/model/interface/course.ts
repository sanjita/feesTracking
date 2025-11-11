export interface Courseinterface {

    courseId?: number;
    courseName: string;
    courseCost: number;
    creratedDate?: string;
    isActive: boolean;
    duration: string;
    instituteId: number;
    courseDescription: string;
}

export interface Institute {
    id: number;
    name: string;
}

