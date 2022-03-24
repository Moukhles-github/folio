<?php 
require_once('utilities.class.php');


class DAL{

    //private members for configuration
    private $servername = "localhost";
    private $username = "root";
    private $password = "";
    public $dbname = "portfolio";



   




    //Get data from database
    public function getdata($sql)
    {
        try{
        $conn = new mysqli($this->servername,$this->username,$this->password,$this->dbname);
       
        if ($conn->connect_error) {	    
             UTILITIES::writeToLog(mysqli_connect_error());
            throw new Exception("Error Fetching Data");
         }
         else{
                
                 $result =$conn->query($sql);
                 if(!$result)
                 {
                     
                    UTILITIES::writeToLog("SQL ($sql)");
                     
                     throw new Exception("No Result");
                 }
                 else{					
                     
                     $rows = array();

                     if($result->num_rows >= 0) {
                        
                         while($row = mysqli_fetch_assoc($result)) {
                             
                             $rows[] = $row;
                         }
                            return $rows;        
                         
                     }
                     else {
                         echo"No Value";
                     }
    
                 }
                 
         }
        }
        catch (Exception $e) {
            echo 'Caught exception: Get Data Failed ', "\n";
        }
        
    
     
    }


    //add or alter data on my database
    function ExecuteQuery($sql)
	{
        try {
		$conn = new mysqli($this->servername,$this->username,$this->password,$this->dbname);
	
	
		if ($conn->connect_error)
		{
	
		   UTILITIES::writeToLog(mysqli_connect_error());
		   throw new Exception("");
		}
		else{
			$result =$conn->query($sql);
	
			if(!$result){
   			    UTILITIES::writeToLog("SQL ($sql)");
				throw new Exception("Error Inserting Data");
			
			}else
				return  1;
		}}
        catch (Exception $e) {
            echo 'Caught exception: Execute Query Failed ', "\n";
        }

        
   
	}
	
	
	// function ExecuteidQuery($sql)
	// {
	// 	$conn = new mysqli($this->servername,$this->username,$this->password,$this->dbname);
	
		
	// 	if ($conn->connect_error)
	// 	{
	
	// 	   UTILITIES::writeToLog(mysqli_connect_error());
	// 	   throw new Exception("error");
	// 	}
	// 	else{
	// 		$result =$conn->query($sql);
	// 		$lastid = $conn->insert_id;
	// 		if(!$result){
   	// 		    UTILITIES::writeToLog("SQL ($sql)"."L");
	// 			throw new Exception("Error Inserting Data");
			
	// 		}else

	// 			return  $lastid;
	// 	}
   
	// }
}  





?>