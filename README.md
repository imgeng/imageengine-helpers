A tiny set of helpers and TS types for building [ImageEngine](https://imageengine.io) query URLs for your distribution.

These set of utilities only make sense if you want to use an object to declare your [directives](https://support.imageengine.io/hc/en-us/articles/360058880672-directives) for when retrieving assets from an ImageEngine distribution.

Install it with:

`npm install @imageengine/imageengine-helpers`

View on [npm](https://www.npmjs.com/package/@imageengine/imageengine-helpers)

Types:

```
export type IEFormat =
    "png"  |
    "gif"  |
    "jpg"  |
    "bmp"  |
    "webp" |
    "jp2"  |
    "svg"  |
    "mp4"  |
    "jxr"  |
    "avif" ;


export type IEFit =
    "stretch"   |
    "box"       |
    "letterbox" |
    "cropbox"   |
    "outside"   ;


export interface IEDirectives {
    width?: number;                // the intrinsic width of the final image 
    height?: number;               // the intrinsic height of the final image
    auto_width_fallback?: number;  // if WURFL device detection should be tried with a
                                   // fallback value in case it fails

    scale_to_screen_width?: number;          // 0-100 float
    crop?: [number, number, number, number]; // [width, height, left, top]

    format?: IEFormat;  // the output format
    fit?: IEFit;        // the image fit in relation to the provided width/height

    compression?: number; // 0-100
    sharpness?: number;   // 0-100
    rotate?: number;      // -360-360

    inline?: true;                 // convert image to dataURL
    keep_meta?: true;              // keep EXIF image data
    no_optimization?: true;        // don't apply IE optimizations
    force_download?: true;
};
```

For instance:

```js
import { build_IE_url, build_IE_directives, build_IE_query_string } from "imageengine-helpers";

let directives: IEDirectives = {
    width: 400,
    height: 200,
    fit: "cropbox", 
    compression: 10,
    inline: true,
    format: "png",
    force_download: true
};

let source_url: string = "https://my_ie_distribution.imgeng.io/path/to_asset1.jpg";

let final_url: string = build_IE_url(source_url, directives);

/*
"https://my_ie_distribution.imgeng.io/path/to_asset1.jpg?imgeng=/w_400/h_200/m_cropbox/cmpr_10/in_true/f_png/dl_true"
*/

let directives_string: string = build_IE_directives(directives);

/*
"/w_400/h_200/m_cropbox/cmpr_10/in_true/f_png/dl_true"
*/

let query_string: string = build_IE_query_string(directives);

/*
"?imgeng=/w_400/h_200/m_cropbox/cmpr_10/in_true/f_png/dl_true"
*/
```
