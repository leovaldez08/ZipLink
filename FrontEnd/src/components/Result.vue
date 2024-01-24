<script>
import { defineComponent, ref } from "vue";
import useClipboard from "vue-clipboard3";

export default defineComponent({
  setup() {
    const { toClipboard } = useClipboard();
    const text = ref("https://ziplink.com/bada55");

    const copyToClipboard = async () => {
      if (text.value.trim() !== "") {
        try {
          await toClipboard(text.value);
        } catch (e) {
          console.error(e);
        }
      }
    };

    return { copyToClipboard, text };
  },
});
</script>

<template>
  <div class="main flex justify-center mt-24">
    <div class="w-110 h-64 rounded-2xl bg-[#3685D3] mb-20">
      <div class="flex justify-center mt-12 mb-2">
        <h1 class="text-2xl text-white font-Dela">Shortened Link</h1>
      </div>
      <div class="flex justify-center">
        <div class="relative mt-8">
          <input
            v-model="text"
            type="text"
            readonly
            class="w-100 h-10 rounded-full font-medium text-lg outline outline-4 outline-black p-4"
          />
          <button
            class="absolute right-0 top-0 w-10 h-10 flex justify-center items-center rounded-full bg-black text-xl font-medium font-Dela text-white outline outline-4 outline-black"
            @click="copyToClipboard"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="28"
              height="28"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path d="M25 0H0V25H25V0Z" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use xlink:href="#image0_77_6" transform="scale(0.0111111)" />
                </pattern>
                <image
                  id="image0_77_6"
                  width="90"
                  height="90"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACJklEQVR4nO3cMW4TQRiG4RVBOAXhAJAaKRdIR0ETKVGuQQek9EFAuUgKTmAQFfYZSCqqCBC4etHKjhSheHZtr79/dvZ7+vHOvl5t7N/KVpWZmZlZsYB94AL4CvxCYw5MgONqCIBDYEacP8BJNYAreRYYeRixWdwuclFubBb35JyUGRv4GRT096BiE+dVw5v8FzivSkGQ5bGHE5sg944/jNgE+W8P5ccmyAP7KDs2QVbspdzYBEnsp8zYBGnYU3mxCdJiX/nGTo06E2tCtDyf19l9g2wadSbWhVjjvPKJ3WbUmVgbYs3zaxP7OItRZ2JtlOcdx550EnPbUWdibZTxBueZij3fOmQXo87E2ij174XjLq/sTmI2HLzRNmv7wqFFHFrEoUUcWsShRRxaxKFFHFrEoUUcWsShRRxaxKFFHFrEoUUcWsShRRxaxKFFHFrEoUUcWsShRRxaxKFFHFrEoUUcWsShRRxaxKFFHHpIoYGDzB6M0rXbXEK/7Mmjfjb1JZfQpyvWvqcMb3MJ/XHF2hEwpd++AU9yCf0deJz4r9sp/Y38YueR1whde5N4jRHwrr7X9eAPZL2/z/XtQnIlbxD6ZtWnD2thzavhE7DnsLsPXfsAPHLs3YeuXQHPHHv3oWs/lk9GePDTiHUX+s41cAmcAUfAU0fu9orOTtZvMAWpckZBqpz14JtcPqPObXjUKeJRp4hHnUIedQp51GlmZmZmZlaV4R9HKiSqDI7QLgAAAABJRU5ErkJggg=="
                />
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
