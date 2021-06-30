const blockIconURI ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA/FBMVEX////m5+iSlJf/sAD/7gAAi+mNj5KmqKrNztD/rAD/qwDp6usAg+j/rgAAhegAieni7fu31Pb/8gD98uL926n/5sWXmZz/tjC8vb/c3d6goqXHyMqMj5yPkpn2+/7//vr/uQCytLb+wQDX6vv/+e3z8/P/6wD+2QCfzPTp9P3C3vherO/+8dr+1pX/6cP/xF3/5LX/tiD+y3T/7s//vD7+1I7/4QD+0wD/xgCtqoL/2qf/v0pEoO17ufErl+v/z33/ym3/xWLOpWDaqUunnoDBpGvtriywnXrw2Cbz4Rro2jnay0nIu1q5sG+eno6/s2Wzp3aZlo/WxE++uq36NQ/vAAALcklEQVR4nO2cfWPaOBLGMW4MMlHTQs4BnNaQkuS6TQgvJdkmvZLu3XYvm72+3H3/73K2saWRLIzfZEyj569dgRv9GGlGGo1VqykpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKZUt529E2+6KJHVMtJKJtt0VSeqYeqhtd0WSFOHu62ci7IyErRsIL6T2qUg5C/NS1L6B0MHv53I7VpQmU4R1kRE3EC4RRldC41dLF0cm1nV0JfgonvACue3YvHRk9zCfOvcenytTMODiCa9WD6LpRHovc2iOUICA30c/jSUchx9iU2T/yugIhwzoMPJhLOGUPllpI45DG+p4GplQcYSX9EGB9aukz9QUC/6zGMKRTp4zKx4WO6SnOurwn60nXBITovtyOppdCzrceI+xnnBOHxJG0krJwXS8cRHD3x+u9ojcQ1d0bAtXQ9XSIbEU7zNGi8PJZDyeHF4u2Q/G9JGof6qg3sdFDKGAm6l0pAiVelItdiZShKIRw5wl+HoHUaNXPFKEGgU2weZ9kh6PLnHwAFpu/nY15C9QMPrMB8R1chY+4w5ECiJ3kYlSbWdH9+5QTeqYqqCxiW7TPjJFR1L6IknL9C7D+TyW0JG8GqeKz07HjfaHbtS/cHYhrnsa4aQbcufi8v7INIO0vmlOrxbjNG7ltNXrDhuWZbiy+o1ht6mdZupySs0QRncJHMp8NkWIrlc9t4mRqV9NkpmyZTd8tDqR/3/9rpaz/xt1YfpBYRZvDOfWw9Ojcin15UZDnnYtyAbltg97hdGIFCxAEYrJjzluOBfhBZDInMUGzWZ/HR6BtOXN6QndtR6tc4OTKVqLFzyLF2u7aFuxeAFkvStpSjo06+Ta4kpkitFVjP0o41T8+zTrCfhWjLYUwkvGOthcRkwxTsLnPxtJ6dRqWhL7UUYJ87Fjct1H+iHLuOC/EWPGO/7n6abg8xkbhQ9V51bnppi7lYCffxbNQOxJhDhlRnkqA8ozo7NkjYQx7OUdD4i9UD8YnAwG2IyGD6yDh5tCPgNI+Hm3cMRah/EkcGvgcIBuyBjcnJ+1A13fnOgcJEAcRgGMutUf2s2er6bdbVgCN2Q0ikesjY9oBuIOtLNDFKPBzXW7/Yyq3T47H7CMWF/NRafB990w+t2e1nKl+fL/q2c3IpBGX0LccMgG3QTDbGnCvqPB+TOIF0A+uz5hhvkqSRMBNKxuL2SDarV6dj/yXRmhcTTz+4lASmYCATG6EfCtIK91iOj9Ew7XacNqivBCyGbE4FKi//zOHW+YrjBH0F2iwdkaPt+OJ3A4m5MaC2hY9nq+gJH7SaRY0VucmSCJdAcBfz1by+cz3oAv4wHrZIyhFsu3YrS5uShnneos6CycIAi43oAB4jn4+m+vuAG6ic9n7DFmNIZSCCEsmFubAT1E8v1/MoCNzQYMGRnTG3JWqVQ0g50I0EMMHNOUGW3dpHweos0gyt0ZO2DHMUjA5yH+uvpR/vUqI6CL2GS8jVRCsOUw450MQBxgboymBPQQYZJDwvqNClQc3CQZo76uMTtGUwNyA1XmOAWlCoPEgO44xfrv1IRGIzWgiwg3XH15hPfUhOfJCZ+d4S9gjPbT82msRzWkZagcMkjTmNAz4h+AsJfBhJ6sEpzN3Ew5C8P91L+P80zCwIjNEowICn8S0T38+fjXfz64+grGaEZAdpzKmolkSYpPNpjQ3SE+fvtaPz5+5Qv4waxj1JN8d0r8DI4fpO2zP797cPWIjGEOQBAyci1PO7zIxmlEp+F1LN9fX48FdCs3kx1QY5xNjm2UbnIiCRrqaMxYvh/Ha/Dq9SyhEBiRBkWjmZ3wiEuU0donsnGKiRXtxxg+t1+5CDWtkGHKE9IakUNCuM7RtB8+xPC5cSwnYKtBfywZhLebCNuP9XXzb9WrrLGQENKYmMOb8oQ4MWH7W6wBvVCRD1ADASPHRMxuw+8iQCaNndOEzDDNniDOTBgFNOreobxtd7vDRt9lzedJfULqTbOvTSO+lBDG+1Ie0Kg3mqtc9kq9ZsPOTaj16Motc0ScIlYmOeGkhaJ6hLDNARqWrXHJ0PjcaFJC+hcyuxqvKAbqltiQ1jlHMhick4nNZedTn7qtrIQxoqs2bv/bfmQt2E2cKkwr6mryrGrWim6AuUTiA2vAPPuHTYRkCyUlcbrE4onY/gD3R8lzvfkIZaTcQAUKHKbt/4Ixmmt/lICQhAsp+f0R3SDCYXr2ozRA2YTg3AnTHWL7W85MYSpCmsqQcSRMVzXQiA+5M4XZCOUUL4Bji2uBCTNnCjMRSqlBoa8ikJXbGfiLeXdHCQjp0lvOZLygC7cgZQqDffZMYXL16yxi4efe78EBqR8x2vTULHeOIoF6Vp1T0as3YER3KrqID+WasMdXZxSEOKL1ATN6gohdRBDtyzBhy7aiVWH5EZ2lSS/VAW+86hhdt7+TQWpJ5/MZtWaXr/wzcs5F7xYFUPPFFAx9+VamIw0YCy6zmd95RVHwhVFa1Tb9A2TuyxikFLJZVA3KaLYqwMNT0Bhuon5ncodW/kRaKka2BiXrZvGS3KJgguLLjj8Vv/xgc6NleFKGkSnQyDYVx6AUn3m3bo4xW/9Tl7+pECDC2JhlnF7cMRWisDqxNoeVByU7GogI16itlHzOjC9lZl5T/l8ke28UkCpMjQgPvlMasYP4QnbmnUpBqXaZrpQighqUtEa8Yi2IdGhBfunkv3FWqisliOAwKuVu8QIxBmReKDnl+Lw6bZnZpzhC+GOnIwS3dWB0x74zytQmG31hnXZpiMPM521hFSKOvNjFTEJrCw6GETVi6qTGqngG4Vuu7tiBOzSZyd9kAjMx9WmUuzjD5n2krhqa0NrS9IOEdvbTqLnJT0BfsLxs23ieejkOvmeiF52h89r6EPVFT6OKOasBvqv8dZpI4DSqmPwpNWElxmjxeX5Qs7PtOBEIuJpC3m4DxXPbRgsElt+FEIJqj2qYsHBCAliVQVr4KAXFgVUh7BZKeEoJt7JbEqjgc29KWN82WagWjfhF1C5UkBDUEBVxgHFa5WCROhklklO5edgaEhum3eSLVT1fWkz9PhWd1qVngIWCxe3FHJWC9F0lCOFbJsW8BN2r1jCFiaiCihZAuKjAwlTK214gBVsBI4KUSmEve4FfTXoB1Ca1QOlJcSUZIOG9bXfagqnpAt/Xg4ch28zUtDQIWOTreqfw390eYqtpMR0pDpC9xkpuQXAMn8ZeplXwi8Hwn954A4skPvYGokLW3EDs8aHL2GuVKa035G5YKv7FBJv7A/XG0G6WI+8WUL7sS0bVvuA6q9JU5yXnnowI4vYk6yKQyiDKu0FCcLHcFmTUJd5zYlcAUfKtURp/Y1zpfH25t/DWUtyyKoXPkvHyWpRx7UXHkvGMhnT7hdK6ljBKyWNz/1ijV8p930SnPXvYKEtDd41YKp2SkpKSkpKS0s+uty+INjS+3tD4urxOp9LBfqh3tPETafxIGz+Sxk+08R1p3Kso4d+f7wXaf0saX9LGN6TxF9L4/BfS+IY2viy134n1eo/08B+09dNB0HgA7PqRNAK7vgsb94BdKyVqwgORCQ+ACfcFJnxBGverasJPhCW5CeEs3FETUsOITLgvmoWVNSGZhYwJSWPiWXhQfRPubzKh0JGSMVpVR1ojPUwxC3fUhM9FjvT5JhNS71pREz6pWEgXmmITihzpE4qFOzALc8bCqs7CGpmFTysW/kSbCmrCnI50B0wo3FQIHakwFlbfkeaNhXvldTqVxLGQWoua8M2OxkJigae1Io3fVOzv1KbiiZow+aai8rHwSW0qssTCHXCkKsFGGnd0U6ESbLufYHseah+acD9shCYkjdCEpLGqJnzxkoia8K2o8TVtfCFqfFNTUlJSUlJSUlJSUlJSUlJKp/8DSEtmAgG6yhQAAAAASUVORK5CYII=';
class ScratchFetch {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "Temperature",
            "name": "Temperature",
          "blockIconURI": blockIconURI,
            "blocks": [
                        {
                            "opcode": "fetchURL",
                            "blockType": "reporter",
                            "text": "fetch data from [url]",
                            "arguments": {
                                "url": {
                                    "type": "string",
                                    "defaultValue": "https://api.weather.gov/stations/KNYC/observations"
                                },
                            }
                        },
                        {
                            "opcode": "jsonExtract",
                            "blockType": "reporter",
                            "text": "extract [name] from [data]",
                            "arguments": {
                                "name": {
                                    "type": "string",
                                    "defaultValue": "temperature"
                                },
                                "data": {
                                    "type": "string",
                                    "defaultValue": '{"temperature": 12.3}'
                                },
                            }
                        },
                ],
        };
    }
    
    fetchURL({url}) {
       //debugger;
        if(isNaN(url))
        {
          return fetch(url).then(response => response.text())  
        }
        else
        {
            (url<15)?(return "cold weather"):(return "sunny weather");
        }
     //   return fetch(url).then(response => response.text())
       // return "vinith";
    }
    
    jsonExtract({name,data}) {
        var parsed = JSON.parse(data)
        if (name in parsed) {
            var out = parsed[name]
            var t = typeof(out)
            if (t == "string" || t == "number")
                return out
            if (t == "boolean")
                return t ? 1 : 0
            return JSON.stringify(out)
        }
        else {
            return ""
        }
    }
}

Scratch.extensions.register(new ScratchFetch())
