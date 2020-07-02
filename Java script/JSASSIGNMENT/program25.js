function ascendingArray(str) {

    var temp;
    var a = str.split(""); 
		for (let i = 0; i <a.length; i++)
		{
			for (let j = i+1; j < a.length; j++)
			{
				if(a[i]>a[j])
				{
					temp=a[j];
					a[j]=a[i];
					a[i]=temp;
				}
			}
        }
        return a;
}

		

        var aa="1489765";
        var a=ascendingArray(aa);
        console.log(a);
        