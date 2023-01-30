<script>

    let aHalmaz= [];
    let bHalmaz= [];
    for (let i=0; i<10; i++) {
        aHalmaz.push(Math.round(Math.random() * 20));
}
    for (let i=0; i<10; i++) {
        bHalmaz.push(Math.round(Math.random() * 20));
}
    document.write("A generált halmazok elemei:");
    document.write("<br>A halmaz:");
        for (let i=0; i<aHalmaz.length; i++)
        {
            document.write(aHalmaz[i] + ",");
}
        document.write("<br>B halmaz:");
            for (let i=0; i<bHalmaz.length; i++)
            {
                document.write(bHalmaz[i] + ",");
}

            let unio=[];
            function SzerepelE1 ()
            {
	for (let i=0; i<aHalmaz.length; i++) {
                let szerepelE=false;
            for (let j=0; j<unio.length; j++) {
        	if (aHalmaz[i]==unio[j]) {
                szerepelE = true;
            }
        }
            if (szerepelE==false) {
                unio.push(aHalmaz[i]);
    }
    }
            for (let i=0; i<unio.length; i++) {
            	return unio
            }
}

            function SzerepelE2 ()
            { 
	for (let i=0; i<bHalmaz.length; i++) {
                let szerepelE=false;
            for (let j=0; j<unio.length; j++) {
            	if(bHalmaz[i]==unio[j]) {
                szerepelE = true;
                }
            }
            if (szerepelE==false) {
                unio.push(bHalmaz[i]);
            }
    }
            for (let i=0; i<unio.length; i++) {
            	return unio
            }
}


            SzerepelE1();
            // nem kell kiíratni, mivel át kell, hogy menjen
            // a for ciklus a B halmaz elemein is, és így ezen ciklus
            // végrehajtásával adódik hozzá az összes vizsgált elem az unio
            // halmazához, amit aztán ki lehet iratni.
            document.write("<br> Unio: ");
                document.write(SzerepelE2())


            </script>




            <script>

                let aHalmaz= [];
                let bHalmaz= [];
                for (let i=0; i<10; i++) {
                    aHalmaz.push(Math.round(Math.random() * 20));
}
                for (let i=0; i<10; i++) {
                    bHalmaz.push(Math.round(Math.random() * 20));
}
                document.write("A generált halmazok elemei:");
                document.write("<br>A halmaz:");
                    for (let i=0; i<aHalmaz.length; i++) {
                        document.write(aHalmaz[i] + ",");
}
                    document.write("<br>B halmaz:");
                        for (let i=0; i<bHalmaz.length; i++)
                        {
                            document.write(bHalmaz[i] + ",");
}



                        let metszet=[];
                        for(let i=0;i<aHalmaz.length;i++)
                        {
		for(let j=0;j<bHalmaz.length;j++)
                        {
                            function SzerepelE() {
                                let szerepelE = false;
                                if (aHalmaz[i] == bHalmaz[j]) {
                                    for (let k = 0; k < metszet.length; k++) {
                                        if (aHalmaz[i] == metszet[k]) {
                                            szerepelE = true;
                                        }
                                    }
                                    if (szerepelE == false) {
                                        metszet.push(aHalmaz[i]);
                                    }
                                    for (let i = 0; i < metszet.length; i++) {
                                        return metszet[i];
                                    }
                                }
                            }

                        }
}


                        document.write("<br>Metszet:");

                            SzerepelE();


                        </script>





                        let aHalmaz= [];
                        let bHalmaz= [];
                        for (let i=0; i<10; i++) {
                            aHalmaz.push(Math.round(Math.random() * 20));
}
                        for (let i=0; i<10; i++) {
                            bHalmaz.push(Math.round(Math.random() * 20));
}
                        document.write("A generált halmazok elemei:");
                        document.write("<br>A halmaz:");
                            for (let i=0; i<aHalmaz.length; i++) {
                                document.write(aHalmaz[i] + ",");
}
                            document.write("<br>B halmaz:");
                                for (let i=0; i<bHalmaz.length; i++)
                                {
                                    document.write(bHalmaz[i] + ",");
}

                                let metszet=[];
                                function Metszet () {
for(let i=0;i<aHalmaz.length;i++)
                                {
	for(let j=0;j<bHalmaz.length;j++)
                                {
    	if(aHalmaz[i]==bHalmaz[j])
                                {
                                    let szerepelE=false;
                                for(let k=0;k<metszet.length;k++)
                                {
            	if(aHalmaz[i]==metszet[k])
                                {
                                    szerepelE = true;
                }
            }
                                if(szerepelE==false){
                                    metszet.push(aHalmaz[i]);
            }
            
        }
                                for (let i=0; i<metszet.length;i++) {
            	return metszet;
            }
    }
}
}

                                document.write("<br>METSZET:");
                                    document.write(Metszet())







                                    let aHalmaz= [];
                                    let bHalmaz= [];
                                    for (let i=0; i<10; i++) {
                                        aHalmaz.push(Math.round(Math.random() * 20));
}
                                    for (let i=0; i<10; i++) {
                                        bHalmaz.push(Math.round(Math.random() * 20));
}
                                    document.write("A generált halmazok elemei:");
                                    document.write("<br>A halmaz:");
                                        for (let i=0; i<aHalmaz.length; i++) {
                                            document.write(aHalmaz[i] + ",");
}
                                        document.write("<br>B halmaz:");
                                            for (let i=0; i<bHalmaz.length; i++)
                                            {
                                                document.write(bHalmaz[i] + ",");
}

                                            let AkulB=[];
                                            function AkulonbsegB () {
for(let i=0;i<aHalmaz.length;i++){
                                                let vanEgyezes=false;
                                            for(let j=0;j<bHalmaz.length;j++){
    	if(aHalmaz[i]==bHalmaz[j])
                                            {
                                                vanEgyezes = true;
        }
    }
                                            if(vanEgyezes==false){
                                                let szerepelE=false;
                                            for(let k=0;k<AkulB.length;k++){
        	if(aHalmaz[i]==AkulB[k]){
                                                szerepelE = true;
            }
        }
                                            if(szerepelE==false){
                                                AkulB.push(aHalmaz[i]);
        }
 		
    }
                                            for (let i=0; i<AkulB.length; i++) {
        	return document.write(AkulB[i]+",");
        }
}

}

                                            document.write("<br>A különbség B: ")
                                                document.write(AkulonbsegB());

