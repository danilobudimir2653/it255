<?php

if(isset($_POST['auto']))
{
    $auto = $_POST['auto'];


    if($auto=="audi")
    {
        $ponuda["model"] = "A4";
        $ponuda["motor"] = "dizel";
        $ponuda["zapremina"] = "1.9ccm";

        echo json_encode($ponuda);
    }
    elseif ($auto == "mecka")
    {
        $ponuda["model"] = "S500";
        $ponuda["motor"] = "benzin";
        $ponuda["zapremina"] = "5000ccm";

        echo json_encode($ponuda);
    }
    elseif ($auto == "jaguar")
    {

        $ponuda["model"] = "xkk";
        $ponuda["motor"] = "benzin";
        $ponuda["zapremina"] = "4200ccm";

        echo json_encode($ponuda);
    }




}
if(isset($_GET['auto']))
{
    $auto = $_GET['auto'];


    if($auto=="audi")
    {
        $ponuda["model"] = "A4";
        $ponuda["motor"] = "dizel";
        $ponuda["zapremina"] = "1.9ccm";

        echo json_encode($ponuda);
    }
    elseif ($auto == "mecka")
    {
        $ponuda["model"] = "S500";
        $ponuda["motor"] = "benzin";
        $ponuda["zapremina"] = "5000ccm";

        echo json_encode($ponuda);
    }
    elseif ($auto == "jaguar")
    {

        $ponuda["model"] = "xkk";
        $ponuda["motor"] = "benzin";
        $ponuda["zapremina"] = "4200ccm";

        echo json_encode($ponuda);
    }




}

