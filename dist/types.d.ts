export declare type IEFormat = "png" | "gif" | "jpg" | "jpeg" | "bmp" | "webp" | "jp2" | "svg" | "mp4" | "jxr" | "avif";
export declare type IEFit = "stretch" | "box" | "letterbox" | "cropbox" | "outside";
export interface IEDirectives {
    width?: number;
    height?: number;
    auto_width_fallback?: number;
    autoWidthWithFallback?: number;
    scale_to_screen_width?: number;
    scaleToScreenWidth?: number;
    crop?: [number, number, number, number];
    format?: IEFormat;
    outputFormat?: IEFormat;
    fit?: IEFit;
    fitMethod?: IEFit;
    compression?: number;
    sharpness?: number;
    rotate?: number;
    inline?: true;
    keep_meta?: true;
    keepMeta?: true;
    no_optimization?: true;
    noOptimization?: true;
    force_download?: true;
    max_device_pixel_ratio?: number;
    maxDevicePixelRatio?: number;
}
