import { useMemo } from 'react';
import { Chart } from 'react-charts';

const ResultChart = ({ projectState }) => {
    const newData = useMemo(() => {
        const newData1 = [];
        return newData1;
    }, []);

    projectState?.KP?.forEach((e) => newData.push([e, projectState?.X[e]]));

    const data = useMemo(
        () => [
            {
                label: 'Series 1',
                data: newData,
                // data: [
                //     [0, 1],
                //     [1, 2],
                //     [2, 4],
                //     [3, 2],
                //     [4, 7],
                // ],
            },
        ],
        [newData]
    );

    const axes = useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' },
        ],
        []
    );

    return (
        <main style={{ marginTop: '3rem', textAlign: 'center', margin: '0 3rem' }}>
            {projectState && (
                <>
                    <h1>Result Chart</h1>
                    <div
                        style={{
                            // width: '400px',
                            width: '100%',
                            height: '300px',
                        }}
                    >
                        <Chart data={data} axes={axes} />
                    </div>
                </>
            )}
        </main>
    );
};

export default ResultChart;
