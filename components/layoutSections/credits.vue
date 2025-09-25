<template>
  <div class="min-h-78 p-4 pb-0 w-full">
    This site was built from scratch by <a target="_blank"
      href="https://github.com/faeq-f" class="underline">Faeq</a> using:
    <div class="rounded-2xl w-full h-full mt-2 ">
      <div class="flex h-1/5">
        <nuxt-link target="_blank" to=""
          class="w-1/4 rounded-none rounded-tl-2xl border-t border-r border-accented border-l">
          <UButton
            class="p-2.5 rounded-none rounded-tl-2xl hover:bg-[var(--ui-bg-elevated)] w-full h-full"
            icon="i-lucide-server" size="md" color="neutral " variant="ghost">
            Nuxt
          </UButton>
        </nuxt-link>
        <UButton icon="i-lucide-toy-brick" size="md" color="neutral"
          variant="ghost"
          class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented">
          Vue.js
        </UButton>
        <UButton icon="i-lucide-wind" size="md" color="neutral" variant="ghost"
          class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented  ">
          TailwindCSS
        </UButton>
        <UButton
          class=" rounded-none rounded-tr-2xl p-2.5 w-1/4 border-t border-r border-accented "
          icon="i-lucide-square-round-corner" size="md" color="neutral"
          variant="ghost">
          Sass
        </UButton>
      </div>
      <div class="flex h-1/5">
        <nuxt-link target="_blank" to="https://youtu.be/Bj0h4VtMDQA"
          class="w-1/4 rounded-none border-t border-r border-accented border-l">
          <UButton
            class="p-2.5 rounded-none hover:bg-[var(--ui-bg-elevated)] w-full h-full"
            icon="i-lucide-image-play" size="md" color="neutral "
            variant="ghost">
            Background video
          </UButton>
        </nuxt-link>
        <UButton icon="i-lucide-component" size="md" color="neutral"
          variant="ghost"
          class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented">
          Maz UI
        </UButton>
        <UButton icon="i-lucide-puzzle" size="md" color="neutral"
          variant="ghost"
          class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented ">
          Nuxt UI
        </UButton>
        <UButton
          class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented "
          icon="i-lucide-cylinder" size="md" color="neutral" variant="ghost">
          Pinia
        </UButton>
      </div>
      <div class="flex h-1/5">
        <UButton icon="i-lucide-a-large-small" size="md" color="neutral"
          variant="ghost"
          class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented  border-l">
          Varela Font
        </UButton>
        <UButton icon="i-lucide-case-sensitive" size="md" color="neutral"
          variant="ghost"
          class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented ">
          Outfit Font
        </UButton>
        <UButton icon="i-lucide-code-xml" size="md" color="neutral"
          variant="ghost"
          class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented ">
          SVGL icons
        </UButton>
        <UButton icon="i-lucide-shell" size="md" color="neutral" variant="ghost"
          class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented ">
          Lucide icons
        </UButton>
      </div>
      <div class="flex h-1/5">
        <UButton icon="i-lucide-mouse-pointer-2" size="md" color="neutral"
          variant="ghost"
          class="rounded-none p-2.5 w-1/4 border-t border-l border-r border-accented ">
          Cursors
        </UButton>
        <UButton
          class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented  "
          icon="i-lucide-binoculars" size="md" color="neutral" variant="ghost">
          Fuse.js
        </UButton>
        <UButton icon="i-lucide-database" size="md" color="neutral"
          variant="ghost"
          class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented ">
          Dexie.js
        </UButton>
        <UButton icon="i-lucide-gallery-vertical" size="md" color="neutral"
          variant="ghost"
          class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented ">
          Scroller
        </UButton>
      </div>
      <div class="flex h-1/5">
        <UButton icon="i-lucide-mouse" size="md" color="neutral" variant="ghost"
          class=" rounded-none p-2.5 w-1/4 border-t border-r border-l border-accented ">
          Lenis
        </UButton>
        <UButton icon="i-lucide-router" size="md" color="neutral"
          variant="ghost"
          class=" rounded-none p-2.5 w-1/4 border-t border-r  border-accented ">
          GitHub Pages
        </UButton>
        <UButton
          class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented "
          icon="i-lucide-text-align-start" size="md" color="neutral"
          variant="ghost">
          MdEditorV3
        </UButton>
        <UButton
          class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented "
          icon="i-lucide-wallpaper" size="md" color="neutral" variant="ghost">
          Zarlasht theme background image
        </UButton>
      </div>
      <div class="flex h-1/5">
        <UButton icon="i-lucide-case-upper" size="md" color="neutral"
          variant="ghost"
          class=" rounded-none rounded-bl-2xl p-2.5 w-1/4 border-t border-r border-l border-accented border-b">
          Requiem Font
        </UButton>
        <UButton icon="i-lucide-case-lower" size="md" color="neutral"
          variant="ghost"
          class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented border-b">
          IM FELL DW Pica Roman Font
        </UButton>
        <UButton
          class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented border-b"
          disabled size="md" color="neutral" variant="ghost">
        </UButton>
        <UButton
          class=" rounded-none rounded-br-2xl p-2.5 w-1/4 border-t border-r border-accented border-b"
          disabled size="md" color="neutral" variant="ghost">
        </UButton>
      </div>
    </div>
  </div>
</template>