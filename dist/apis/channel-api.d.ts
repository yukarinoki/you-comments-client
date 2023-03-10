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
import { Channel } from '../models';
import { Comments } from '../models';
/**
 * ChannelApi - axios parameter creator
 * @export
 */
export declare const ChannelApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary チャンネル情報の取得
     * @param {string} channelId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    channelChannelIdGet: (channelId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary チャンネルのコメント群の取得
     * @param {string} channelId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    channelCommentsChannelIdGet: (channelId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * ChannelApi - functional programming interface
 * @export
 */
export declare const ChannelApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary チャンネル情報の取得
     * @param {string} channelId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    channelChannelIdGet(channelId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Channel>>>;
    /**
     *
     * @summary チャンネルのコメント群の取得
     * @param {string} channelId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    channelCommentsChannelIdGet(channelId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Comments>>>;
};
/**
 * ChannelApi - factory interface
 * @export
 */
export declare const ChannelApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary チャンネル情報の取得
     * @param {string} channelId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    channelChannelIdGet(channelId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Channel>>;
    /**
     *
     * @summary チャンネルのコメント群の取得
     * @param {string} channelId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    channelCommentsChannelIdGet(channelId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Comments>>;
};
/**
 * ChannelApi - object-oriented interface
 * @export
 * @class ChannelApi
 * @extends {BaseAPI}
 */
export declare class ChannelApi extends BaseAPI {
    /**
     *
     * @summary チャンネル情報の取得
     * @param {string} channelId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelApi
     */
    channelChannelIdGet(channelId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Channel>>;
    /**
     *
     * @summary チャンネルのコメント群の取得
     * @param {string} channelId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelApi
     */
    channelCommentsChannelIdGet(channelId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Comments>>;
}
