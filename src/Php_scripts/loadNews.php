<?php
/**
 * Function to query information 
 *
 */
 
header('Content-type: text/html; charset=ISO-8859-15');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Authorization, Origin');
header('Access-Control-Allow-Methods: POST, PUT, GET');

require "../config.php";
require "../common.php";

  try  {
	
     $connection = new PDO($dsn, $username, $password, $options);

    // Finds how many entries
    $stmt = $connection->prepare("SELECT COUNT(*) FROM jtf_news");
    $stmt->execute();
    $count = $stmt->fetchColumn();

    $data = json_decode(file_get_contents('php://input'), true);
    $offset = $data["offset"];
    $limit = $data["limit"];
    
    // Test if we are trying to get more news than we have, if so set offset to..
    if($count < $offset)
    {
        $offset = $count - $limit;
    }
     if($offset < 0) $offset = 0;
    
    // Get the data
    $sql = "SELECT * FROM jtf_news ORDER BY PublishDate ASC LIMIT :offset, :limit";
    $statement = $connection->prepare($sql);
    $statement->bindParam(':offset', $offset, PDO::PARAM_INT); 
    $statement->bindParam(':limit', $limit, PDO::PARAM_INT); 
    $statement->execute();
	$result = $statement->fetchAll(PDO::FETCH_ASSOC);

	 //$row = array();
      
		echo json_encode($result );
   
  } catch(PDOException $error) {
      echo $sql . "<br>" . $error->getMessage();
	  echo "Erroren";
  }
?>

