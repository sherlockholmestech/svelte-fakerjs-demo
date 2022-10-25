<script>
    import "../app.css";
    import { createPerson } from './faker'

    let Person = createPerson();

    function refreshPerson(){
        Person = createPerson();
    }
</script>

<h1 class="text-3xl font-bold underline">Random Person generator</h1>
<p>Generate a random person!</p>
<div id="person">
    <p>
        Avatar:<br>
    </p>
    <img src={Person.avatar} alt={Person.avatar}>
    <p>
        Name: {Person.firstName} {Person.lastName}<br>
        Birthday: {Person.birthday}<br>
        Sex: {Person.sex}<br>
        ID: {Person._id}<br>
        Email: {Person.email}<br>
    </p>
</div>

<button on:click={refreshPerson}>Refresh person</button>

