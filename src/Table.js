// import ChartAsset from "./ChartAsset";


export function Table({ data, caption,columns }) {
    return(
        <table>
            <caption>{caption}</caption>
            <thead>
                <tr>
                 {columns?.map((column,index) =>(
                    <th key={index}>{column}</th>
                 ))}
                {/* <th>Month</th>
                <th>Debit</th>
                <th>Credit</th> */}
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((item,index)=>(
                        <tr key={index}>
                            {columns?.map((column,index)=>(
                                <td key={index}>{item[column]}</td>
                            ))}
                        </tr>
                    ) )
                        
                            // return (
                            // <tr key={index}>
                            //     <td>{item.month}</td>
                            //     <td>{item.debit}</td>
                            //     <td>{item.credit}</td>
                            //     </tr>)
                        
                   
                }
            </tbody>
        </table>

    )

}
    