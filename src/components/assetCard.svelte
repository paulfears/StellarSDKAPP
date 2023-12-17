<script>
    import AssetSelector from "./assetSelector.svelte";
</script>
<div class="flex flex-col w-full pt-4 border-t border-gray-200 dark:border-gray-700 h-[140%]">
    <div class="flex-grow overflow-y-auto p-4">
      <h3 class="tracking-tight text-lg font-semibold text-gray-900 dark:text-white mb-4 flex justify-between">
        Your Assets
        <button class="btn variant-filled inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 ml-auto">
          Add Asset
        </button>
      </h3>
      <AssetSelector/>
      <div
        class="rounded-lg border bg-card text-card-foreground shadow-sm mb-4 cursor-pointer p-4 space-y-4"
        data-v0-t="card"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center w-full space-x-4">
            <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-1">
              <span class="text-md font-normal text-gray-900 dark:text-white">XYZ</span>
            </div>
            <div class="flex space-x-4">
              <p class="text-sm text-gray-500 dark:text-gray-300">1000 XYZ</p>
              <p class="text-sm text-gray-500 dark:text-gray-300">$2000</p>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <button class="btn inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 text-sm text-gray-900 dark:text-gray-200 border border-gray-200 px-2 py-1 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-4 h-4 mr-1"
              >
                <path d="m22 2-7 20-4-9-9-4Z"></path>
                <path d="M22 2 11 13"></path>
              </svg>
              Send
            </button>
          </div>
        </div>
      </div>
      <div
        class="rounded-lg border bg-card text-card-foreground shadow-sm mb-4 cursor-pointer p-4 space-y-4"
        data-v0-t="card"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center w-full space-x-4">
            <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-1">
              <span class="text-md font-normal text-gray-900 dark:text-white">ABC</span>
            </div>
            <div class="flex space-x-4">
              <p class="text-sm text-gray-500 dark:text-gray-300">500 ABC</p>
              <p class="text-sm text-gray-500 dark:text-gray-300">$1000</p>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <button class="btn inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 text-sm text-gray-900 dark:text-gray-200 border border-gray-200 px-2 py-1 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-4 h-4 mr-1"
              >
                <path d="m22 2-7 20-4-9-9-4Z"></path>
                <path d="M22 2 11 13"></path>
              </svg>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>