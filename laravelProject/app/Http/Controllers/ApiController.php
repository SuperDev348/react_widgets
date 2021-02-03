<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware(['auth', 'verified']);
    }

  
    public function apiParser($query, Request $request)
    {
        $tenant = env("TENENT");
        $key = $query;
        $apiModuleLocation = env("APP_API_MODULE_LOCATION");
        $aArgs = array();
        $aArgs["tenant"] = $tenant;
        $aArgs["queryType"] = $key;
        $userData=array();
        $userData["user"]=array();
        $userData["id"]=1;
        $userData["tenant_id"]=env("TENENT");
        $userData["name"]="Dishanth";
        $userData["email"]="dishanth@123.com";
        $userData["team_id"]=1;
        $userData["func_area_id"]=1;

        $aArgs["user"]=$userData;
        if (isset($request["data"])) {
            
            $aArgs["data"] = $request["data"];
        } 
        // else {
            // $aArgs["queryParameters"] = $request->all();
        // }
        $aArgs["queryParameters"] = $request->all();
        
        $sArgs = base64_encode(json_encode($aArgs));
        
        $command = "python " . $apiModuleLocation . "apiTranslator.py " . $sArgs . "  2>&1";
        $response = shell_exec($command);

        if ($this->isJson($response)){
            $res=json_decode($response);
            
            if(isset($res->status)){
                return response()->json($res,$res->status);
            }else 
            return response()->json($res);
        } 
        else return response()->json($response, 500);
    }


    private function isJson($string)
    {
        json_decode($string, null);
        return (json_last_error() == JSON_ERROR_NONE);
    }
}
