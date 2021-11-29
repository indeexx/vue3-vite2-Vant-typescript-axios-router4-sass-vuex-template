/*
 * @Author: indeex
 * @Date: 2021-08-29 16:35:40
 * @Email: indeex@qq.com
 */
export class App {
    public canvas?: HTMLCanvasElement;
    public context?: GPUCanvasContext;
    public devicePixelWidth?: number;
    public devicePixelHeight?: number;
    public CreateCanvas(rootElement: HTMLElement) {
        let width = rootElement.clientWidth;
        let height = rootElement.clientHeight;
        this.devicePixelWidth = width * window.devicePixelRatio;
        this.devicePixelHeight = height * window.devicePixelRatio;
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.devicePixelWidth;
        this.canvas.height = this.devicePixelHeight;
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        rootElement.appendChild(this.canvas);
    }

    public async InitWebGPU(callback: Function) {
        this.context = (this.canvas as any).getContext('webgpu') as GPUCanvasContext;
        return new Promise((resolve: Function, reject: Function) => {
            if (this.context) {
                // console.info(`哦豁哦豁😁`);
                resolve(true);
            } else {
                // throw new Error('你浏览器不支持😒');
                reject(false);
            }
        });
    }
}