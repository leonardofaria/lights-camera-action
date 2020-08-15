import React, { FunctionComponent} from 'react';
import { useTabState, Tab, TabList, TabPanel } from "reakit/Tab";
import { IMAGE_PATH, IMAGE_SIZE } from '../../constants';
import Genres from '../Genres';

type Props = {
  item?: any,
  mediaType: "movie" | "show",
}

const ItemPage: FunctionComponent<Props> = ({ item, mediaType }) => {
  const tab = useTabState();

  return (
    <>
      <section className="flex lg:py-8">
        <div className="w-1/3">
          <div className="mr-4 lg:mr-8 _nmp_ -nmp_src--lt -nmp_light--gray-600 -nmp_shadow--gray-600 -nmp_dist--xs rounded-lg">
            <img src={`${IMAGE_PATH}/${IMAGE_SIZE}/${item?.poster_path}`} alt={item?.title} className="rounded-lg w-full h-auto" />
          </div>
        </div>

        <div className="w-2/3 lg:ml-4">
          <div>
            <h2 className="text-inter-3xl text-white mb-5">{item?.title}{item?.name}</h2>

            <Genres genres={item?.genres} mediaType={mediaType} />

            <p>{item?.overview}</p>
          </div>
        </div>
      </section>

      <section className="flex mt-8">
        <div className="w-full sm:w-1/2">
          <div className="mr-6">
            <TabList {...tab}>
              <Tab className="border-gray-700 border-l border-t border-r rounded-t py-2 px-4 text-gray-200" {...tab}>Details</Tab>
              <Tab className="border-gray-700 border-l border-t border-r rounded-t py-2 px-4 text-gray-200" {...tab}>Cast</Tab>
            </TabList>
            <TabPanel className="border-gray-700 border" {...tab}>
              <table className="table-auto">
                <tbody>
                  <tr className="w-full">
                    <td className="px-4 py-2">
                      Vote average
                    </td>
                    <td className="px-4 py-2">
                      { item?.vote_average } / 10
                    </td>
                  </tr>
                  <tr className="w-full">
                    <td className="px-4 py-2">
                      Release date
                    </td>
                    <td className="px-4 py-2">
                      { item?.release_date }
                    </td>
                  </tr>
                  <tr className="w-full">
                    <td className="px-4 py-2">
                      Revenue
                    </td>
                    <td className="px-4 py-2">
                      { item?.revenue }
                    </td>
                  </tr>
                </tbody>
              </table>
            </TabPanel>
            <TabPanel className="border-gray-700 border py-2 px-4" {...tab}>
              Cast - todo
            </TabPanel>
          </div>
        </div>
      </section>
    </>
    
  );
};

export default ItemPage;
