<template>
  <UCard id="AboutMeCard0"
    class="my-5 mx-4 opacity-80 min-h-[32rem] cardShadow border border-[var(--ui-border)]">

    <div class="min-h-[24.5rem] flex max-h-[24.5rem] w-full">
      <div class="grow">
        <div class="varela mt-2 ml-4">
          Introduction
          <USeparator class="w-28 mb-4 mt-0.5 self-center " />
        </div>
        <div class="mr-4 ml-8">
          I'm a software engineer with a passion for building
          useful things. I'm always working on a wide range of projects,
          with a diverse set of technologies, many of which are publicly
          available as open-source contributions.
          <br /><br />
          I am constantly learning, whether through formal education or
          independently. I completed my Bachelor's degree in Software
          Engineering at Royal Holloway, University of London, graduating
          with a First Class Honours. Now I'm expanding my expertise,
          learning new skills on the job while proactively exploring
          exciting, new technologies.
          <br /><br />
          <USeparator class="w-11/12 self-center " />
          <br />
          My current interests lie in declarative, functional
          programming, with a focus on concurrency and event-based
          architectures. I enjoy FOSS projects with plugin-based
          architectures and customizability. My preferred technologies
          include C#, Vue.js, TypeScript, TailwindCSS, Gleam, and Flutter.
          <br /><br />
          My main, current personal endeavor is
          <UPopover mode="hover">
            <nuxt-link to="https://faeq-f.github.io/Quokka" target="_blank"
              class="boxLink">Quokka</nuxt-link>
            <template #content>
              <p class="p-1 text-sm">Project Site</p>
            </template>
          </UPopover>
          <UPopover mode="hover">
            <nuxt-link to="/project/quokka" class="boxLink">
              <UIcon name="i-lucide-info" />
            </nuxt-link>
            <template #content>
              <p class="p-1 text-sm">Project Information</p>
            </template>
          </UPopover>
          , a portable keystroke launcher for Windows. It features fuzzy
          searching, plugins, and is highly customizable. As a completely
          free and open-source project, it is available for everyone to
          use and contribute to.
          <br /><br />
        </div>
      </div>
      <USeparator orientation="vertical" class="h-70 self-center " />
      <img src="/media/me.jpeg" class="min-h-96 max-h-96 rounded-lg ml-4" />
    </div>

    <template #footer>
      <div class="flex justify-evenly">
        <span>
          <UBadge icon="i-lucide-user" size="lg" color="neutral" variant="soft">
            <USeparator orientation="vertical" class="h-4 invert opacity-20" />
            Legal Name:
            <span class="opacity-80">
              Faeq Faisal
            </span>
          </UBadge>
        </span>
        <span>
          <UBadge icon="i-lucide-map-pin-house" size="lg" color="neutral"
            variant="soft">
            <USeparator orientation="vertical" class="h-4 invert opacity-20" />
            Location:
            <span class="opacity-80">
              London, UK
            </span>
          </UBadge>
        </span>
        <span>
          <nuxt-link to="/portfolio">
            <UBadge icon="i-lucide-square-kanban" size="lg" color="neutral"
              variant="soft">
              <USeparator orientation="vertical"
                class="h-4 invert opacity-20" />
              Number of Projects:
              <span class="opacity-80">
                00
              </span>
            </UBadge>
          </nuxt-link>
        </span>
        <span>
          <nuxt-link to="/portfolio">
            <UBadge icon="i-lucide-file-badge" size="lg" color="neutral"
              variant="soft">
              <USeparator orientation="vertical"
                class="h-4 invert opacity-20" />
              Number of Certifications:
              <span class="opacity-80">
                00
              </span>
            </UBadge>
          </nuxt-link>
        </span>
      </div>
    </template>
  </UCard>
</template>