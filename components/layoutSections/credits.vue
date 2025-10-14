<template>
  <div class="min-h-78 p-4 pb-0 w-full">
    This site was built from scratch by <a target="_blank"
      href="https://github.com/faeq-f" class="underline">Faeq</a> using:
    <div class="rounded-2xl w-full h-full mt-2 ">
      <div class="flex h-1/5">
        <nuxt-link target="_blank" to="https://nuxt.com/"
          class="w-1/4 rounded-none rounded-tl-2xl border-t border-r border-accented border-l">
          <UButton
            class="p-2.5 rounded-none rounded-tl-2xl hover:bg-[var(--ui-bg-elevated)] w-full h-full"
            icon="i-lucide-server" size="md" color="neutral" variant="ghost">
            Nuxt
          </UButton>
        </nuxt-link>
        <nuxt-link target="_blank" to="https://vuejs.org/"
          class="w-1/4 rounded-none border-t border-r border-accented ">
          <UButton icon="i-lucide-toy-brick" size="md" color="neutral"
            variant="ghost"
            class="p-2.5 rounded-none hover:bg-[var(--ui-bg-elevated)] w-full h-full">
            Vue.js
          </UButton>
        </nuxt-link>
        <nuxt-link target="_blank" to="https://tailwindcss.com/"
          class="w-1/4 rounded-none  border-t border-r border-accented ">
          <UButton icon="i-lucide-wind" size="md" color="neutral"
            variant="ghost"
            class="p-2.5 rounded-none rounded-tl-2xl hover:bg-[var(--ui-bg-elevated)] w-full h-full">
            TailwindCSS
          </UButton>
        </nuxt-link>
        <nuxt-link target="_blank" to="https://sass-lang.com/"
          class="w-1/4 rounded-none rounded-tr-2xl border-t border-r border-accented ">
          <UButton
            class="p-2.5 rounded-none rounded-tr-2xl hover:bg-[var(--ui-bg-elevated)] w-full h-full"
            icon="i-lucide-square-round-corner" size="md" color="neutral"
            variant="ghost">
            Sass
          </UButton>
        </nuxt-link>
      </div>
      <div class="flex h-1/5">
        <nuxt-link target="_blank" to="https://youtu.be/Bj0h4VtMDQA"
          class="w-1/4 rounded-none border-t border-r border-accented border-l">
          <UButton
            class="p-2.5 rounded-none hover:bg-[var(--ui-bg-elevated)] w-full h-full"
            icon="i-lucide-image-play" size="md" color="neutral"
            variant="ghost">
            Background video
          </UButton>
        </nuxt-link>
        <nuxt-link target="_blank" to="https://maz-ui.com/"
          class="w-1/4 rounded-none border-t border-r border-accented ">
          <UButton icon="i-lucide-component" size="md" color="neutral"
            variant="ghost"
            class="p-2.5 rounded-none  hover:bg-[var(--ui-bg-elevated)] w-full h-full">
            Maz UI
          </UButton>
        </nuxt-link>
        <nuxt-link target="_blank" to="https://ui.nuxt.com/"
          class="w-1/4 rounded-none border-t border-r border-accented ">
          <UButton icon="i-lucide-puzzle" size="md" color="neutral"
            variant="ghost"
            class="p-2.5 rounded-none hover:bg-[var(--ui-bg-elevated)] w-full h-full">
            Nuxt UI
          </UButton>
        </nuxt-link>
        <nuxt-link target="_blank" to="https://pinia.vuejs.org/"
          class="w-1/4 rounded-none border-t border-r border-accented ">
          <UButton
            class="p-2.5 rounded-none hover:bg-[var(--ui-bg-elevated)] w-full h-full"
            icon="i-lucide-cylinder" size="md" color="neutral" variant="ghost">
            Pinia
          </UButton>
        </nuxt-link>
      </div>
      <div class="flex h-1/5">
        <nuxt-link target="_blank"
          to="https://fonts.google.com/specimen/Varela+Round"
          class="w-1/4 rounded-none border-t border-r border-accented border-l ">
          <UButton icon="i-lucide-a-large-small" size="md" color="neutral"
            variant="ghost"
            class="p-2.5 rounded-none hover:bg-[var(--ui-bg-elevated)] w-full h-full">
            Varela Round Font
          </UButton>
        </nuxt-link>
        <nuxt-link target="_blank" to="https://fonts.google.com/specimen/Outfit"
          class="w-1/4 rounded-none border-t border-r border-accented ">
          <UButton icon="i-lucide-case-sensitive" size="md" color="neutral"
            variant="ghost"
            class="p-2.5 rounded-none hover:bg-[var(--ui-bg-elevated)] w-full h-full">
            Outfit Font
          </UButton>
        </nuxt-link>
        <nuxt-link target="_blank" to="https://svgl.app/"
          class="w-1/4 rounded-none border-t border-r border-accented ">
          <UButton icon="i-lucide-code-xml" size="md" color="neutral"
            variant="ghost"
            class="p-2.5 rounded-none hover:bg-[var(--ui-bg-elevated)] w-full h-full">
            SVGL icons
          </UButton>
        </nuxt-link>
        <nuxt-link target="_blank" to="https://lucide.dev/"
          class="w-1/4 rounded-none border-t border-r border-accented ">
          <UButton icon="i-lucide-shell" size="md" color="neutral"
            variant="ghost"
            class="p-2.5 rounded-none hover:bg-[var(--ui-bg-elevated)] w-full h-full">
            Lucide icons
          </UButton>
        </nuxt-link>
      </div>
      <div class="flex h-1/5">
        <nuxt-link target="_blank" to=""
          class="w-1/4 rounded-none border-t border-r border-accented border-l">
          <UButton icon="i-lucide-mouse-pointer-2" size="md" color="neutral"
            variant="ghost"
            class="p-2.5 rounded-none  hover:bg-[var(--ui-bg-elevated)] w-full h-full">
            Cursors
          </UButton>
        </nuxt-link>
        <nuxt-link target="_blank" to="https://www.fusejs.io/"
          class="w-1/4 rounded-none  border-t border-r border-accented ">
          <UButton
            class="p-2.5 rounded-none  hover:bg-[var(--ui-bg-elevated)] w-full h-full"
            icon="i-lucide-binoculars" size="md" color="neutral"
            variant="ghost">
            Fuse.js
          </UButton>
        </nuxt-link>
        <nuxt-link target="_blank" to="https://dexie.org/"
          class="w-1/4 rounded-none  border-t border-r border-accented ">
          <UButton icon="i-lucide-database" size="md" color="neutral"
            variant="ghost"
            class="p-2.5 rounded-none  hover:bg-[var(--ui-bg-elevated)] w-full h-full">
            Dexie.js
          </UButton>
        </nuxt-link>
        <nuxt-link target="_blank" to=""
          class="w-1/4 rounded-none  border-t border-r border-accented ">
          <UButton icon="i-lucide-gallery-vertical" size="md" color="neutral"
            variant="ghost"
            class="p-2.5 rounded-none  hover:bg-[var(--ui-bg-elevated)] w-full h-full">
            Scroller
          </UButton>
        </nuxt-link>
      </div>
      <div class="flex h-1/5">
        <nuxt-link target="_blank" to="https://lenis.darkroom.engineering/"
          class="w-1/4 rounded-none  border-t border-r border-accented border-l">
          <UButton icon="i-lucide-mouse" size="md" color="neutral"
            variant="ghost"
            class="p-2.5 rounded-none  hover:bg-[var(--ui-bg-elevated)] w-full h-full">
            Lenis
          </UButton>
        </nuxt-link>
        <nuxt-link target="_blank" to="https://pages.github.com/"
          class="w-1/4 rounded-none  border-t border-r border-accented ">
          <UButton icon="i-lucide-router" size="md" color="neutral"
            variant="ghost"
            class="p-2.5 rounded-none hover:bg-[var(--ui-bg-elevated)] w-full h-full">
            GitHub Pages
          </UButton>
        </nuxt-link>
        <nuxt-link target="_blank"
          to="https://imzbf.github.io/md-editor-v3/en-US"
          class="w-1/4 rounded-none  border-t border-r border-accented ">
          <UButton
            class="p-2.5 rounded-none  hover:bg-[var(--ui-bg-elevated)] w-full h-full"
            icon="i-lucide-text-align-start" size="md" color="neutral"
            variant="ghost">
            MdEditorV3
          </UButton>
        </nuxt-link>
        <nuxt-link target="_blank"
          to="https://unsplash.com/photos/a-black-and-white-photo-of-a-mountain-0QzFognB6bY"
          class="w-1/4 rounded-none  border-t border-r border-accented ">
          <UButton
            class="p-2.5 rounded-none  hover:bg-[var(--ui-bg-elevated)] w-full h-full"
            icon="i-lucide-wallpaper" size="md" color="neutral" variant="ghost">
            Zarlasht theme background image
          </UButton>
        </nuxt-link>
      </div>
      <div class="flex h-1/5">
        <nuxt-link target="_blank"
          to="https://www.1001fonts.com/requiem-font.html"
          class="w-1/4 rounded-none rounded-bl-2xl border border-accented">
          <UButton icon="i-lucide-case-upper" size="md" color="neutral"
            variant="ghost"
            class="p-2.5 rounded-none rounded-bl-2xl hover:bg-[var(--ui-bg-elevated)] w-full h-full">
            Requiem Font
          </UButton>
        </nuxt-link>
        <nuxt-link target="_blank"
          to="https://fonts.google.com/specimen/IM+Fell+DW+Pica"
          class="w-1/4 rounded-none border-t border-r border-b border-accented ">
          <UButton icon="i-lucide-case-lower" size="md" color="neutral"
            variant="ghost"
            class="p-2.5 rounded-none hover:bg-[var(--ui-bg-elevated)] w-full h-full">
            IM Fell DW Pica Font
          </UButton>
        </nuxt-link>
        <nuxt-link target="_blank" to=""
          class="w-1/4 rounded-none border-t border-r border-b border-accented ">
          <UButton
            class="p-2.5 rounded-none hover:bg-[var(--ui-bg-elevated)] w-full h-full"
            disabled size="md" color="neutral" variant="ghost">
          </UButton>
        </nuxt-link>
        <nuxt-link target="_blank" to=""
          class="w-1/4 rounded-none border-t rounded-br-2xl border-r border-b border-accented ">
          <UButton
            class="p-2.5 rounded-none rounded-br-2xl hover:bg-[var(--ui-bg-elevated)] w-full h-full"
            disabled size="md" color="neutral" variant="ghost">
          </UButton>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>