<script>
    import "../app.css";
    import { createPerson } from './faker'

    let Person = createPerson();

    function refreshPerson(){
        Person = createPerson();
    }
</script>

<body class = "h-screen bg-gray-900">
    <h1 class="text-sky-400 font-bold underline text-2xl">Random Person generator</h1>
    <p class="text-sky-400">Generate a random person!</p>
    <div id="person">
        <p class="text-sky-400">
            Avatar:<br>
        </p>
        <img src={Person.avatar} alt={Person.avatar}>
        <p class="text-sky-400">
            Name: {Person.firstName} {Person.lastName}<br>
            Birthday: {Person.birthday}<br>
            Sex: {Person.sex}<br>
            ID: {Person._id}<br>
            Email: {Person.email}<br>
        </p>
    </div>

    <button class="font-bold bg-clip-border p-1 text-slate-100 bg-blue-600 hover:bg-blue-800 rounded-md" on:click={refreshPerson}>Refresh person</button>
</body>
