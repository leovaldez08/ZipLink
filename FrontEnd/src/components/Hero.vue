<script>
export default {
  name: "Hero",
};
</script>

<template>
  <div class="main">
    <div class="flex justify-center mt-20">
      <h1 class="text-9xl text-white font-Oi drop-shadow-xl">ZipLink</h1>
    </div>
    <div class="flex justify-center gap-14 mt-10">
      <h4 class="text-2xl font-medium text-white font-Dela">Shorten</h4>
      <h4 class="text-2xl font-medium text-white font-Dela">Share</h4>
      <h4 class="text-2xl font-medium text-white font-Dela">Simplify</h4>
    </div>
    <div class="flex justify-center mt-20">
      <div class="relative mt-8">
        <input
          type="text"
          class="w-128 h-12 rounded-full font-medium text-xl outline outline-4 outline-black p-4"
        />
        <button
          class="absolute right-0 top-0 w-44 h-12 rounded-full bg-black text-xl font-medium font-Dela text-white outline outline-4 outline-black"
        >
          Zip It!
        </button>
      </div>
    </div>
  </div>
</template>
