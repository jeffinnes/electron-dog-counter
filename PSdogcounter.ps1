[int]$currentdogs = (Read-Host -Prompt "How many dogs do you have?")
[int]$additionaldogs = Read-Host -Prompt "How many more dogs do you want?"
[int]$totaldogs = $currentdogs + $additionaldogs

Write-Host "Awesome!"

    if ($currentdogs -eq 1){
        Write-Host "You currently have $currentdogs dog.  If you got $additionaldogs more you would have $totaldogs dogs!"
        Write-Host "I hope someday you have $totaldogs dogs!"
        }

    else {
        Write-Host "You currently have $currentdogs dogs.  If you got $additionaldogs more you would have $totaldogs dogs!"
        Write-Host "I hope someday you have $totaldogs dogs!"
        }
Read-Host "I hope you enjoyed this!  Press Enter to exit!" | Out-Null