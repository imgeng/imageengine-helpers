export declare type IEFormat = "png" | "gif" | "jpg" | "bmp" | "webp" | "jp2" | "svg" | "mp4" | "jxr" | "avif";
export declare type IEFit = "stretch" | "box" | "letterbox" | "cropbox";
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
    inline?: boolean;
    keep_meta?: boolean;
    keepMeta?: boolean;
    no_optimization?: boolean;
    noOptimization?: boolean;
}
