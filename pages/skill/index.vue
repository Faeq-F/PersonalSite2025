<script setup lang="ts">
import { liveQuery } from "dexie";
import { useObservable } from "@vueuse/rxjs";
import { db } from "~/assets/scripts/db.ts";


let skills = useObservable(liveQuery(() => db.skills.toArray()))

</script>
<template>
  {{ skills }}
</template>