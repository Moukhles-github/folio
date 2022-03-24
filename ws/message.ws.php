<?php

header('Access-Control-Allow-Origin: *');
require_once('../classes/message.class.php');

$message = new _message();
$result = 0;



/* Operations 

  Case 1 = Get all messages.
  Case 2 = Submit a message.
  Case 3 = Get all messages that i haven't replied. 
  Case 4 = Get all messages that i have replied. 
  Case 5 = Suspend a Message. 

*/
try {
     if (isset($_GET["op"])) //check if op exists
            {
        $op = $_GET["op"];
        
        switch ($op) { //get all workstations
            case 1: {
                    $result = $message->getMessages();
                }
                break;

            case 2: { 
                    $result = $message->instermessage($_GET['person_name'],$_GET['person_email'], $_GET['person_subject'], $_GET['person_text']);               
            }
            break;

            default:
                return 0;
                
        }
    }

    header("Content-type:application/json");
    echo json_encode($result);
} catch (Exception $e) {

    echo -1;
}
