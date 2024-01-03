export type ValidationErrors = {
  readonly [type: string]: {
    readonly [type: string]: string;
  };
};

export interface IErrorBody {
  readonly type?: string;
  readonly title: string;
  readonly status: number;
  readonly detail?: string;
  readonly instance?: string;
  readonly validationErrors?: ValidationErrors;
}

export interface PaginationMetaInterface {
  readonly itemCount: number;
  readonly totalItems: number;
  readonly itemsPerPage: number;
  readonly totalPages: number;
  readonly currentPage: number;
  readonly firstPageUrl?: string;
  readonly lastPageUrl?: string;
  readonly nextPageUrl?: string;
  readonly previousPageUrl?: string;
}

export interface ResourceBody<T> {
  readonly data: T;
}

export interface ItemsBody<T> {
  readonly items: T;
}

export type ISuccessBody<T> = ResourceBody<T> | ItemsBody<T>;
