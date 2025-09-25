<script setup lang="ts">
import { useRoute } from 'nuxt/app';
import { ref, watch } from 'vue';
import Link from '~/components/link.vue'

const route = useRoute()

const name = (route.params.name as string).replace('~', ' ')


const loading = ref(false)
const readme = ref("Could not load the file")
const contributors = ref([])

watch(() => route.params.name, fetchData, { immediate: true })
async function fetchData(_name) {
  readme.value = ""
  contributors.value = []
  loading.value = true
  try {
    readme.value = ''
    contributors.value = []
  } catch (err) {
    console.log('Error fetching plugin data:', err.toString())
  } finally {
    loading.value = false
  }
}

import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
import { useThemeHandler } from 'maz-ui'
const themeHandler = useThemeHandler({
  watchChanges: true,
})
const theme = ref(themeHandler.selectedTheme.value)
watch(themeHandler.selectedTheme, async (newTheme, _oldTheme) => theme.value = newTheme.toString())
</script>

<template>
  <div class="mx-78 mt-24">

  </div>
</template>