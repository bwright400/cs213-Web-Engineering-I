<!DOCTYPE html>
<html>
<head>
	<title>Confirmation</title>
</head>
<body style="width: 1425px; background-color: deepskyblue">
    <h1 style="text-align: center">Confirm Order</h1>
    <div style="position: relative; border: 10px solid darkblue; text-align: center; 
                margin-left: 400px; margin-right: 400px; background-color: aquamarine">
        <?php
            $fname   = $_POST["first"];
            $lname   = $_POST["last"];
            $mname   = $_POST["middle"];
            $address = $_POST["add"];
            $city    = $_POST["town"];
            $state   = $_POST["state"];
            $zip     = $_POST["code"];
            $phone   = $_POST["cell"];
            ?>
        <div style="font-size: 18px; font-family: Arial;">
            <h2 style="font-size: 22px;">Personal Information</h2>
            <?php
            print "Name: $fname $lname &nbsp &nbsp Phone#: $phone
                    <div><p style='font-weight: bold; position: relative; top: 10px;'>Shipping To<p> 
                    $address <br /> $city $state, $zip</div>";
                ?>
        </div>
        
        <div style="position: relative; right: 180px; top: 50px">
            <div style="text-align: center;">
                <h2 style="font-size: 18px;">Items To Purchase</h2>
                <?php
                    $firstItem = $_POST["lap"];
                    $secondItem = $_POST["xbox"];
                    $thirdItem = $_POST["tv"];
                    $fourthItem = $_POST["ps4"];
                    $fifthItem = $_POST["ipad"];
                    $sixthItem = $_POST["wii"];
                    function getItem($string, $item)
                    {
                        if (isset($item))
                        {
                            print "$string &nbsp $$item <br />";
                            return true;
                        }
                        else
                            return false;
                    }
                    
                    $total = 0;
                    if (getItem("laptop", $firstItem))
                        $total += $firstItem;
                    if (getItem("xbox", $secondItem))
                        $total += $secondItem;
                    if (getItem("tv", $thirdItem))
                        $total += $thirdItem;
                    if (getItem("ps4", $fourthItem))
                        $total += $fourthItem;
                    if (getItem("ipad", $fifthItem))
                        $total += $fifthItem;
                    if (getItem("wii", $sixthItem))
                        $total += $sixthItem;
                    ?>
            </div>
            <div style="font-weight: bold">
                <?php
                print "<br />Total Cost: $$total <br /> <br />";
                ?>
            </div>
        </div>
        <div style="text-align: center; position: relative; left: 150px; bottom: 130px;">
            <h3 style="font-size: 18px;">Card Type</h3>
            <?php
                $vType = $_POST["visaType"];
                $mType = $_POST["masterType"];
                $eType = $_POST["expressType"];
                
                function checkCardType($type)
                {
                    if (isset($type))
                        return true;
                    else
                        return false;
                }

                if (checkCardType($vType))
                    print "Card type: Visa <br />";
                else if (checkCardType($mType))
                    print "Card Type: Mastercard <br />";
                else if (checkCardType($eType))
                    print "Card Type: American Express <br />";
                
                $exMonth = $_POST["expM"];
                $exYear = $_POST["expY"];
                
                switch ($exMonth)
                {
                    case "01":
                        print "Expiration Date: January $exYear";
                        break;
                    case "02":
                        print "Expiration Date: Februray $exYear";
                        break;
                    case "03":
                        print "Expiration Date: March $exYear";
                        break;
                    case "04":
                        print "Expiration Date: April $exYear";
                        break;
                    case "05":
                        print "Expiration Date: May $exYear";
                        break;
                    case "06":
                        print "Expiration Date: June $exYear";
                        break;
                    case "07":
                        print "Expiration Date: July $exYear";
                        break;
                    case "08":
                        print "Expiration Date: August $exYear";
                        break;
                    case "09":
                        print "Expiration Date: September $exYear";
                        break;
                    case "10":
                        print "Expiration Date: October $exYear";
                        break;
                    case "11":
                        print "Expiration Date: November $exYear";
                        break;
                    case "12":
                        print "Expiration Date: December $exYear";
                        break;
                    default:
                        print "Wrong Month";
                }
            ?>
        </div>
    </div>
    <br />
    <form action="assign10_a.php" method="post">
        <label style="position: relative; left: 650px;">
            <input type="submit" value="Confirm" />
            <input type="submit" value="Cancel" />
        </label>
    </form>
</body>
</html>