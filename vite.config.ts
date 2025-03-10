import legacy from '@vitejs/plugin-legacy'

import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(() => {
        return {
                plugins: [
                      vue(), dts(),
                      // targets 目标最低浏览器版本   |    renderLegacyChunks  build时是否需要触发编译器
                      legacy({targets: ['chrome < 60', 'edge < 15'],renderLegacyChunks: false,})
                    ],
                
                resolve: {
                        alias: {
                            // @ts-ignore
                            '@': path.resolve(__dirname, 'src')
                        }
                },

                // 移动端像素转化css的fn自动导入
                css: {
                    preprocessorOptions: {
                        scss: {
                            additionalData: '@import "@/assets/color.scss";'
                        }
                    }
                },
                
        }
    }
);
