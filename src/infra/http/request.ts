/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export interface RequestConfig extends AxiosRequestConfig {}
export interface Response extends AxiosResponse {}

export interface HttpClient {
  get: (url: string, config: RequestConfig) => any;
  post: (url: string, body?: any, config?: RequestConfig) => any;
  delete: (url: string, config?: RequestConfig) => any;
}

export class Request implements HttpClient {
  constructor(private readonly request = axios) {}

  async get(url: string, config: RequestConfig = {}): Promise<Response> {
    return this.request.get(url, config);
  }

  async post(
    url: string,
    body = {},
    config: RequestConfig = {}
  ): Promise<Response> {
    return this.request.post(url, body, config);
  }

  async delete(url: string, config: RequestConfig = {}) {
    return this.request.delete(url, config);
  }
}
