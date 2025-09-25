<template>
  <UCard id="AboutMeCard0"
    class="my-5 mx-4 opacity-80 min-h-[32rem] cardShadow border border-[var(--ui-border)]">

    <div class="min-h-[24.5rem] flex max-h-[24.5rem] w-full">
      <div class="grow">
        <div class="varela mt-2 ml-4">
          Introduction
          <USeparator class="w-28 mb-4 mt-0.5 self-center " />
        </div>
        <div class="mr-4 ml-8 leading-[1.9]">
          I'm a software engineer with a passion for building
          useful things. I'm always working on a wide range of projects,
          with a diverse set of technologies, many of which are publicly
          available as open-source contributions.
          <div class="h-4"></div>
          I am constantly learning, whether through formal education or
          independently. I completed my
          <UPopover mode="hover">
            <nuxt-link to="https://faeq-f.github.io/Quokka" target="_blank"
              class="boxLink">Bachelor's degree in Software
              Engineering</nuxt-link>
            <template #content>
              <p class="p-1 text-sm">See my degree</p>
            </template>
          </UPopover> at
          <UPopover mode="hover">
            <nuxt-link to="https://www.royalholloway.ac.uk/" target="_blank"
              class="boxLink">RHUL</nuxt-link>
            <template #content>
              <p class="p-1 text-sm">See the University</p>
            </template>
          </UPopover>
          <UPopover mode="hover">
            <nuxt-link
              to="https://en.wikipedia.org/wiki/Royal_Holloway,_University_of_London"
              class="boxLink">
              <UIcon name="i-lucide-info" />
            </nuxt-link>
            <template #content>
              <p class="p-1 text-sm">University Information</p>
            </template>
          </UPopover>
          (Royal Holloway, University of London), graduating
          with a
          <UPopover mode="hover">
            <nuxt-link
              to="https://en.wikipedia.org/wiki/British_undergraduate_degree_classification#Degree_classification"
              target="_blank" class="boxLink">First Class Honours</nuxt-link>
            <template #content>
              <p class="p-1 text-sm">See degree classification</p>
            </template>
          </UPopover>. Now I'm expanding my expertise,
          learning new skills on the job while proactively exploring
          exciting, new technologies.
          <div class="h-4"></div>
          <USeparator class="w-11/12 self-center " />
          <div class="h-4"></div>
          My current interests lie in declarative, functional
          programming, with a focus on concurrency and event-based
          architectures. I enjoy
          <UPopover mode="hover">
            <nuxt-link
              to="https://en.wikipedia.org/wiki/Free_and_open-source_software"
              target="_blank" class="boxLink">FOSS</nuxt-link>
            <template #content>
              <p class="p-1 text-sm">See FOSS</p>
            </template>
          </UPopover>
          projects with plugin-based
          architectures and customizability. My preferred technologies
          include
          <UPopover mode="hover">
            <nuxt-link to="https://learn.microsoft.com/en-us/dotnet/csharp/"
              target="_blank" class="boxLink">C#</nuxt-link>
            <template #content>
              <p class="p-1 text-sm">See C#</p>
            </template>
          </UPopover>,
          <UPopover mode="hover">
            <nuxt-link to="https://vuejs.org/" target="_blank"
              class="boxLink">Vue.js</nuxt-link>
            <template #content>
              <p class="p-1 text-sm">See Vue.js</p>
            </template>
          </UPopover> (with
          <UPopover mode="hover">
            <nuxt-link to="https://nuxt.com/" target="_blank"
              class="boxLink">Nuxt</nuxt-link>
            <template #content>
              <p class="p-1 text-sm">See Nuxt</p>
            </template>
          </UPopover>),
          <UPopover mode="hover">
            <nuxt-link to="https://www.typescriptlang.org/" target="_blank"
              class="boxLink">TypeScript</nuxt-link>
            <template #content>
              <p class="p-1 text-sm">See TypeScript</p>
            </template>
          </UPopover>,
          <UPopover mode="hover">
            <nuxt-link to="https://tailwindcss.com/" target="_blank"
              class="boxLink">TailwindCSS</nuxt-link>
            <template #content>
              <p class="p-1 text-sm">See TailwindCSS</p>
            </template>
          </UPopover>,
          <UPopover mode="hover">
            <nuxt-link to="https://gleam.run/" target="_blank"
              class="boxLink">Gleam</nuxt-link>
            <template #content>
              <p class="p-1 text-sm">See Gleam</p>
            </template>
          </UPopover>,
          <UPopover mode="hover">
            <nuxt-link to="https://flutter.dev/" target="_blank"
              class="boxLink">Flutter</nuxt-link>
            <template #content>
              <p class="p-1 text-sm">See Flutter</p>
            </template>
          </UPopover>
          <div class="h-4"></div>
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