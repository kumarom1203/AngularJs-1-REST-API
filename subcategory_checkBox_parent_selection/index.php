<?php
$data=array ( 0 => array ( 'id' => 1, 'name' => 'Computer Science Book-1', 'type' => 'CSE', ), 1 => array ( 'id' => 2, 'name' => 'Computer Science Book-2', 'type' => 'CSE', ), 2 => array ( 'id' => 3, 'name' => 'Computer Science Book-3', 'type' => 'CSE', ), 3 => array ( 'id' => 4, 'name' => 'Computer Science Book-4', 'type' => 'CSE', ), 4 => array ( 'id' => 5, 'name' => 'Computer Science Book-5', 'type' => 'CSE', ), 5 => array ( 'id' => 6, 'name' => 'Computer Science Book-6', 'type' => 'CSE', ), 6 => array ( 'id' => 7, 'name' => 'Computer Science Book-7', 'type' => 'CSE', ), 7 => array ( 'id' => 8, 'name' => 'Computer Science Book-8', 'type' => 'CSE', ), 8 => array ( 'id' => 9, 'name' => 'Computer Science Book-9', 'type' => 'CSE', ), 9 => array ( 'id' => 10, 'name' => 'Computer Science Book-10', 'type' => 'CSE', ), 10 => array ( 'id' => 11, 'name' => 'Elecrical Book-11', 'type' => 'Elecrical', ), 11 => array ( 'id' => 12, 'name' => 'Elecrical Book-12', 'type' => 'Elecrical', ), 12 => array ( 'id' => 13, 'name' => 'Elecrical Book-13', 'type' => 'Elecrical', ), 13 => array ( 'id' => 14, 'name' => 'Elecrical Book-14', 'type' => 'Elecrical', ), 14 => array ( 'id' => 15, 'name' => 'Elecrical Book-15', 'type' => 'Elecrical', ), 15 => array ( 'id' => 16, 'name' => 'Elecrical Book-16', 'type' => 'Elecrical', ), 16 => array ( 'id' => 17, 'name' => 'Civil Book-17', 'type' => 'Civil', ), 17 => array ( 'id' => 18, 'name' => 'Civil Book-18', 'type' => 'Civil', ), 18 => array ( 'id' => 19, 'name' => 'Civil Book-19', 'type' => 'Civil', ), 19 => array ( 'id' => 20, 'name' => 'Mechanical Book-20', 'type' => 'Mechanical', ), 20 => array ( 'id' => 21, 'name' => 'Mechanical Book-21', 'type' => 'Mechanical', ), 21 => array ( 'id' => 22, 'name' => 'Mechanical Book-22', 'type' => 'Mechanical', ),);
?>

<?php
foreach($data as $key){
	$res[$key['type']][]=$key;
}
$i=0;
foreach($res as $key){
	
	$result[$i]['name']=$key[0]['type'].' Branch';
	$result[$i]['id']=$i;
	foreach($key as $val){
		$result[$i]['app_users'][]=$val;
	}
	$i++;
}
print_r(json_encode($result));
//print_r($result);

?>
















