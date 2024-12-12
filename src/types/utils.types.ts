export interface PostTypes {
    id: number; 
    title: string; 
    url_redirect: string; 
    date: string;
}

export interface TopicsTypes {
    id: number; 
    title: string; 
    text: string; 
    link: string; 
}

export interface PackagesTypes {
    id: number; 
    title: string; 
    text: string; 
    link: string; 
}

export interface CoursesTypes {
    id: number; 
    title: string; 
    text: string; 
    icon: string; 
    link: string; 
    docs: string; 
    name: string; 
    autor: string
}

export interface ArticlesTypes {
    id: number; 
    title: string; 
    link: string; 
    text: string; 
}
