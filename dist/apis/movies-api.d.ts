/**
 * you-comments backend API
 * backend API
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { Comments } from '../models';
import { Movie } from '../models';
/**
 * MoviesApi - axios parameter creator
 * @export
 */
export declare const MoviesApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary 動画のコメント群の取得
     * @param {string} movieId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    movieCommentsMovieIdGet: (movieId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary 動画情報の取得
     * @param {string} movieId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    moviesMovieIdGet: (movieId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * MoviesApi - functional programming interface
 * @export
 */
export declare const MoviesApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary 動画のコメント群の取得
     * @param {string} movieId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    movieCommentsMovieIdGet(movieId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Comments>>>;
    /**
     *
     * @summary 動画情報の取得
     * @param {string} movieId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    moviesMovieIdGet(movieId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Movie>>>;
};
/**
 * MoviesApi - factory interface
 * @export
 */
export declare const MoviesApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary 動画のコメント群の取得
     * @param {string} movieId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    movieCommentsMovieIdGet(movieId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Comments>>;
    /**
     *
     * @summary 動画情報の取得
     * @param {string} movieId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    moviesMovieIdGet(movieId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Movie>>;
};
/**
 * MoviesApi - object-oriented interface
 * @export
 * @class MoviesApi
 * @extends {BaseAPI}
 */
export declare class MoviesApi extends BaseAPI {
    /**
     *
     * @summary 動画のコメント群の取得
     * @param {string} movieId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MoviesApi
     */
    movieCommentsMovieIdGet(movieId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Comments>>;
    /**
     *
     * @summary 動画情報の取得
     * @param {string} movieId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MoviesApi
     */
    moviesMovieIdGet(movieId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Movie>>;
}
