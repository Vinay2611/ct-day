<?php
/**
 * Created by PhpStorm.
 * User: vinayj
 * Date: 03-05-2019
 * Time: 11:11
 */

include 'db.php';

$post_data = $_POST;
/*echo '<pre>';
print_r($_POST);*/
//die();

if($post_data['action'] == 'Registration') {

    $eventcity = trim($post_data['eventcity']);
    $email_id = trim($post_data['email_id']);
    $first_name = trim($post_data['first_name']);
    $last_name = trim($post_data['last_name']);
    $company_name = trim($post_data['company_name']);
    $designation = trim($post_data['designation']);
    $city = trim($post_data['city']);
    $postal_code = trim($post_data['postal_code']);
    $phone_no = trim($post_data['phone_no']);
    $is_agree = trim($post_data['is_agree']);

    $first_name = $db->real_escape_string($first_name);
    $last_name = $db->real_escape_string($last_name);
    $company_name = $db->real_escape_string($company_name);
    $designation = $db->real_escape_string($designation);

    //echo "INSERT INTO `vmware_ctday`( `email_id`, `first_name`, `last_name`, `company_name`, `city`, `postal_code`, `phone_no`, `is_agree` ) VALUES (  '$email_id', '$first_name', '$last_name', '$company_name', '$city', '$postal_code', '$phone_no', '$is_agree') ;
    $insert_query = $db->query("INSERT INTO `vmware_ctday`( `eventcity`, `email_id`, `first_name`, `last_name`, `company_name`, `designation`, `city`, `postal_code`, `phone_no`, `is_agree` ) VALUES (  '$eventcity', '$email_id', '$first_name', '$last_name', '$company_name', '$designation', '$city', '$postal_code', '$phone_no', '$is_agree' )");
    if($insert_query) {
        echo '<script>location.href="thank-you.html"</script>';
    } else {
        echo '<script>location.href="registration"</script>';
    }
}


