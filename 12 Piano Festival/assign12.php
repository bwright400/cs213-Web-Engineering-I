<!DOCTYPE html>
<html>
<head>
    <title>People Signed up</title>
</head>
<body>
    <!--<table>
        <thead>Schedule</thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Student ID</th>
            <th>Per Type</th>
            <th>Skill LV</th>
            <th>Instrument</th>
            <th>Location</th>
            <th>Room Num#</th>
            <th>Time</th>
        </tr>-->
        <?php
            $fname = $_GET["first"];
            $lname = $_GET["last"];
            $ID = $_GET["id"];
            $typePer = $_GET["typePer"];
            $skillLev = $_GET["skill"];
            $instrument = $_GET["instrument"];
            $location = $_GET["locate"];
            $room = $_GET["room"];
            $time = $_GET["time"];

            
            ?>
        <div>
            <?php
                print "$fname $lname $ID $typePer $skillLev $instrument $location $room $time <br />";
                ?>
        </div>
    
</body>
</html>