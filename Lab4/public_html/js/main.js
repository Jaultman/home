$(document).ready(function(){
    //  I, Jared Aultman, student number: 000365309, certify that this material is my original work.
    //  No other person's work has been used without due acknowledgement and I have not made my work 
    //  available to anyone else

    $("#javascriptDetect").hide();
    
    if(navigator.onLine)
    {
        $("#onLineDetect").html("Network Status: <span class='bg-success'>online</span>");
    }
    
    if(Modernizr.localstorage)
    {
        $("#localStorageDetect").html("Local Storage: <span class='bg-success'>Supported.</span>");
    }
    
    if(Modernizr.input.required)
    {
        $("#requiredDetect").html("<span class='bg-success'>Required attribute supported</span>");
    }
    if(Modernizr.inputtypes.date)
    {
        $("#dateDetect").html("<span class='bg-success'>Date type supported</span>");
    }
    if(Modernizr.inputtypes.email)
    {
        $("#emailDetect").html("<span class='bg-success'>Email type supported</span>");
    }    
    if(Modernizr.inputtypes.number)
    {
         $("#birthDetect").html("<span class='bg-success'>Number type supported</span>");
    }
    if(Modernizr.input.pattern)
    {
        $("#postalDetect").html("<span class='bg-success'>Pattern attribute supported</span>");
    }
    
    $("#populateFields").click(function(){
        $("#username").val("Jared");
        $("#date").val("1990-01-01");
        $("#email").val("my.email@email.com");
        $("#age").val("27");
        $("#postal").val("A1A 1A1");
        $("#music").prop("checked", true);
        $("#hardware").prop("checked", true);
        $("#female").prop("checked", true);
        $("#AL").prop("selected", true);
        $("#MT").prop("selected", true);
    });
    
    // $("#selectBox").val(); creates an array of all selected values of the multiselect
    function removeMessage(){
        $("#message").html("");
    }

    $("#saveValuesToLocalStorage").click(function(){
        
        
        localStorage.setItem("username", $("#username").val());
        localStorage.setItem("date", $("#date").val()); 
        localStorage.setItem("email", $("#email").val()); 
        localStorage.setItem("age", $("#age").val());
        localStorage.setItem("postal", $("#postal").val());
        
        localStorage.setItem("music", $("#music")[0].checked);
        localStorage.setItem("hardware", $("#hardware")[0].checked);
        localStorage.setItem("software", $("#software")[0].checked);
        
        localStorage.setItem("gender", $("input[name=gender]:checked").val());
        localStorage.setItem("savedProvinces", JSON.stringify($("#provinces").val()));
        
        $("#message").html("<h2 class='text-center'>Successfully saved date to local storage</h2>");
        
        setTimeout(removeMessage, 2000);
    });
    
    $("#clearFormAndLocalStorage").click(function(){
        localStorage.clear();
    });
    
    $("#loadValuesFromLocalStorage").click(function(){
        $("#username").val(localStorage.username);
        $("#date").val(localStorage.date);
        $("#email").val(localStorage.email);
        $("#age").val(localStorage.age);
        $("#postal").val(localStorage.postal);
        
        var musicState = JSON.parse(localStorage.getItem("music"));
        document.getElementById("music").checked = musicState;
        
        var softwareState = JSON.parse(localStorage.getItem("software"));
        document.getElementById("software").checked = softwareState;
        
        var hardwareState = JSON.parse(localStorage.getItem("hardware"));
        document.getElementById("hardware").checked = hardwareState;

        $("input:radio[name=gender]").filter("[value="+localStorage.getItem("gender")+"]").prop("checked", true);
        $("#provinces").val(JSON.parse(localStorage.getItem("savedProvinces")));

    });
    
});