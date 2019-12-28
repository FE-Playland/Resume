export namespace Resume {
  export interface ResumeInfo {
    basic_info: BasicInfo;
    sections: Section[];
  }

  export interface BasicInfo {
    name: string;
    email: string;
    blog: string;
    github: string;
  }

  export interface Section {
    title: string;
    rows: Row[];
  }

  export interface Row {
    name?: string;
    link?: string;
    icon?: string;
    location?: string;
    date?: string;
    subtitle?: string;
    items?: Item[];
  }

  export interface Item {
    text: string;
  }
}
