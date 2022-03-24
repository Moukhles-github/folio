<?php
require("DAL.class.php");


class _message
{
	//Constructors
	public
	function __construct()
	{
		$this->db = new DAL();
		
	}

	public
	function __destruct()
	{

		$this->db = null;
	}
	
	
	//

	/////////////////////////////////////////////////////////////Methods\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


    public function getMessages()
	{
		try
		{
			//create sql query
            $sqlQuery = "SELECT * FROM `contact-form`";

			//execute and put result in a variable
			$result = $this->db->getData($sqlQuery);
		
			//return the values
            return($result);
            
	
		} catch (Exception $e) {
			echo 'Unable to get all messages';
		}
	}

	public function instermessage($person_name, $person_email, $person_subject, $person_text)

	{

			//query 
			$sqlQuery = "INSERT INTO `contact-form` (`form_id`, `form_name`, `form_email`, `form_subject`, `form_text`, `form_status`) VALUES (NULL, '$person_name', '$person_email', '$person_subject', '$person_text', '1');";

			try 
			{
				$result = $this->db->ExecuteQuery($sqlQuery);
	
				return($result);
			}
			catch (Exception $e) {
				echo 'Error inserting the message';
			}

		
	}

}	
?>