import { useMemo, useCallback } from 'react';
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

    const getLabel = useCallback((series) => series.label, []);

    return (
        <main style={{ marginTop: '3rem', textAlign: 'center', margin: '0 3rem', width: '55%' }}>
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
                        <Chart data={data} getLabel={getLabel} axes={axes} />
                    </div>
                </>
            )}
        </main>
    );
};

export default ResultChart;
