<script setup lang="ts">
import { liveQuery } from "dexie";
import { useObservable } from "@vueuse/rxjs";
import { from } from "rxjs";
import { db, type Skill } from "~/assets/scripts/db";

let skills = useObservable<Skill[]>(from(liveQuery<Skill[]>(() => db.skills.toArray())))
//let n = skills.value![1].category // types now working!!!!!!!!!!!!!!!!!!!!!
</script>
<template>
  <div>{{ skills }}</div>
</template>