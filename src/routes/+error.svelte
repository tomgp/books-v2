<script>
	import { page } from '$app/stores';
	import RatingIcon from '../lib/components/RatingIcon.svelte';
</script>

<h1>{$page.status} {$page.error.message}</h1>
<RatingIcon rating={1}></RatingIcon>