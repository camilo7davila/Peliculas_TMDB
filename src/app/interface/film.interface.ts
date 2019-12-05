// tslint:disable-next-line: class-name
export interface film {
    page: number;
    total_results: number;
    total_pages: number;
    results: filmDetails[];
}

// tslint:disable-next-line: class-name
export interface filmDetails {
    popularity: number;
    original_title: string;
    overview: string;
    id: number;
    vote_average: number;
    title: string;
    poster_path: string;
    original_language: string;
}
